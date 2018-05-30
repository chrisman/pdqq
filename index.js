const http = require('http');
const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PORT || 8080);
server.on('listening', function() {
  console.log('Listening...');
});
