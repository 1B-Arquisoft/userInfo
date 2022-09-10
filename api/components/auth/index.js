// aqui se exportan los controladores

const ctrl = require('./controller')
const store = require('../../../store/dummy')

//le inyectamos el store al controlador
module.exports = ctrl(store);