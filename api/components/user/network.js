const express = require('express');
const router = express.Router();

const secure = require('./secure');
const Controller = require('./index');
const response = require('../../../network/response')

router.get('/', list);
router.get('/:id', get);
router.put('/', secure('update'), update);
router.post('/', insert);

function list(req, res) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });

};

function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });

};

function insert(req, res) {
  Controller.insert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function update(req, res) {
  Controller.update(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

module.exports = router;