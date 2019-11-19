var app = require('./app');
var debug = require('debug')('node-project:server');
var http = require('http');
var fs = require('fs'); 



const hostname = '127.0.0.1';
const port = 3000;

app.set('port', port);
app.set('secPort', port + 443);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', error => console.log(error));
server.on('listening', () => console.log('Listening successfully'));
