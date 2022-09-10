const express = require('express')
const app = express();
const config = require('../config.js')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const bodyParser = require('body-parser')
const errors = require('../network/errors');


// ROUTER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/api/user', user);
app.use('/api/auth', auth);


//usar el manejo de errores como ultimo middleware
app.use(errors);

app.listen(config.api.port, () => {
  console.log('Api escuchando en port ', config.api.port);
});