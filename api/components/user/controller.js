const { nanoid } = require('nanoid');
const auth = require('../auth');
const TABLA = 'users';

module.exports = function (injectedStore) {
  let store = injectedStore || require('../../../store/dummy');

  async function list() {
    return store.list(TABLA);
  }

  async function get(id) {
    return store.get(TABLA, id);
  }

  async function upsert(body) {
    // Here we suppose that the body contains the whole data to be inserted 
    console.log(body)
    let user = {
      name: body.name,
      username: body.username,
    };
    //autogenerate the id if necessary
    user.id = body.id || nanoid();
    if (body.password || body.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password,
      });

    }
    return store.upsert(TABLA, user);
  }

  return {
    list,
    get,
    upsert,
  };
} 