const http = require('http');
const server = http.createServer();
const models = require('./models').db;
const Promise = require('bluebird');

server.on('request', require('./app'));

db.sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log('Server is listening on port 3001!');
    });
  })
  .catch(console.error);

