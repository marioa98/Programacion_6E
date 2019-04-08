//HTTP basic server

let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/'){
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});//Header of request
        let obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj)); //Body of request
    }else{
        res.writeHead(404);
        res.end();
    }

    
}).listen(1337, '127.0.0.1');