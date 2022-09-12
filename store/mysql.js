const mysql = require('mysql2');

const config = require('../config');

const dbconf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  port: config.mysql.port,
}

let connection;

function handleCon() {
  connection = mysql.createConnection(dbconf);

  connection.connect(function (err) {
    if (err) {
      console.error('[ERROR], Failed to connect to MySQL database', err);
      return;
    }
    else {
      console.error("DB connected!")
    }
  });

  connection.on('error', function (err) {
    console.error('[ERROR], Connection error: ' + err.message);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleCon();
    }
    else {
      throw new Error('[ERROR] CONECTION LOST', err.message);
    }
  });
}

handleCon();


function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id= ?`, id, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

function update(table, data, id) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

function query(table, query) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
      if (err) return reject(err);
      resolve(res[0] || null);
    })
  })
}

module.exports = {
  list,
  get,
  insert,
  update,
  query,
}