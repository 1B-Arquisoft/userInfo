const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;
const error = require('../utils/error')

//firmar el token
function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  return jwt.verify(token, secret);
}

function getToken(auth) {
  // Bearer aksdjaskdjaksjdskj
  if (!auth) {
    throw error('Theres no token ', 401);
  }
  if (auth.indexOf('Bearer ') === -1) {
    throw new Error('Bad Format of header');
  }
  let token = auth.replace('Bearer ', '');

  return token;
}

//decode token
function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;
  return decoded;
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);
    //comprobar si es un token propio
    if (decoded.id !== owner.id) {
      throw new Error('Unauthorized');
    }
  },
  logged: function (req) {
    //just check if the token exists
    const decoded = decodeHeader(req);
  }
}

module.exports = {
  sign,
  check,
};