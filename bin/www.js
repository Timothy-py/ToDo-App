// This is the application entry point. The server will be setup here.
const http = require('http');
const app = require('../server')


const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);


const server = http.createServer(app);
server.listen(port);