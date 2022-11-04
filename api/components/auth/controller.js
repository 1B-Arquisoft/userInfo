const nanoid = require('nanoid');
const auth = require('../../../auth');
const bcrypt = require('bcrypt');
const TABLA = 'auth';
const {authenticate} = require('../../utilites/ldap_auth')

module.exports = function (injectedStore) {
  let store = injectedStore || require('../../../store/dummy');

  async function insert(data) {
    const authData = {
      id: data.id,
    }
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }
    return store.insert(TABLA, authData);
  }
  async function update(data) {
    const authData = {}
    id = data.id;
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }
    return store.update(TABLA, authData, id);
  }

  async function login(username, password) {
    const ldap_auth = authenticate(username,password)
    if (ldap_auth == "error"){
      throw new Error('Invalid login credentials');
    }
    const data = await store.query(TABLA, { username: username });
    return bcrypt.compare(password, data.password)
      .then(result => {
        if (result === true) {
          return auth.sign(data);
        }
        else
          throw new Error('Invalid login credentials');
      });
  }
  return {
    update,
    insert,
    login,
  };
} 