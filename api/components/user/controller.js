const { nanoid } = require('nanoid');
const auth = require('../auth');
const TABLA = 'user';

module.exports = function (injectedStore) {
  let store = injectedStore || require('../../../store/dummy');

  async function list() {
    return store.list(TABLA);
  }

  async function get(id) {
    return store.get(TABLA, id);
  }

  async function update(body) {
    let new_user = body
    const id = body.id;
    delete new_user.id;
    if (body.password || body.username) {
      //update also in auth table
      await auth.update({
        username: new_user.username,
        password: new_user.password,
      });
    }
    return store.update(TABLA, new_user, id);
  }
  async function insert(body) {
    let new_user = body;
    new_user.id = body.id || nanoid();
    const pwd = body.password;
    delete new_user.password;
    //create also in auth table
    await auth.insert({
      id: new_user.id,
      username: new_user.username,
      password: pwd,
    });
    return store.insert(TABLA, new_user);
  }

  return {
    list,
    get,
    insert,
    update,
  };
} 