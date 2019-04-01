//HTTP basic server

let http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});//Header of request
    res.end('Hello World\n'); //Body of request

}).listen(1337, '127.0.0.1');