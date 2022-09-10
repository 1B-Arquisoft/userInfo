const express = require('express');

const router = express.Router();
const Controller = require('./index');
const response = require('../../../network/response')


router.post('/login', login);


function login(req, res) {
  Controller.login(req.body.username, req.body.password)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, err + "err", 400);
    });
}

module.exports = router;