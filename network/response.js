exports.success = function (req, res, message = "", status = 200) {
  res.status(status).send({
    error: false,
    status: status,
    body: message,
  });
}

exports.error = function (req, res, message = 'Internal Server Error', status = 500) {
  res.status(status).send({
    error: false,
    status: status,
    body: message,
  });
}