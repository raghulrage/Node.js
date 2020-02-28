const http = require('http');
const app = require('./app');
// const port = process.env.PORT //used while hosting
const port = 5000;

const server = http.createServer(app);
server.listen(port); 