const auth = require('../../../auth')

// Create the middleware to handle authorization


module.exports = function checkAuth(action) {

  function middleware(req, res, next) {
    switch (action) {
      //only owner of an account can edit information
      case 'update':
        const owner = req.body;
        auth.check.own(req, owner)
        next();
        break;
      case 'isLoggedIn':
        auth.check.logged(req, owner)
        next();
        break;
      default:
        next();
    }
  }
  return middleware;
}