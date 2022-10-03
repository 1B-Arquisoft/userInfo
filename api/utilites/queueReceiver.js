const Controller = require('../components/user/controller');
var amqp = require('amqplib/callback_api');

const host = process.env.MQHOST || "127.0.0.1";
const port = process.env.MQPORT || 5672;
const user = process.env.MQUSER || null;
const pass = process.env.MQPASS || null;
const userInfo = user ? `${user}:${pass}@` : "";
const queue = process.env.MQQUEUE || "message_queue";
const url = `amqp://${userInfo}${host}:${port}`;


const receiveMessage = () => {

  console.log(queue)
  amqp.connect(url, function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queue, {
        durable: true
      });

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

      channel.consume(queue, function (msg) {
        console.log(" [x] Received!!! %s", msg.content.toString());
        Controller.insert(msg.data)
          .then((user) => {
            console.log("create user", user)
          })
          .catch((err) => {
            console.log("errorr", err)
          });
      }, {
        noAck: true
      });
    });
  });
}

module.exports = {
  receiveMessage,
};
