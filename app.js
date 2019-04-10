let express = require('express');
let app = express();

let port = process.env.PORT || 3000; //Variable de entorno que declara el puerto en el que se escuche la aplicacion

//Escuchar en el puerto establecido || (OR) en el puerto 3000

app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello World !</h1></body></html>');
    
});

app.get('/Person', function(req, res){
    res.send('<html><head></head><body><h1> Person:'+
    req.params.id+'</h1></body></html>');
})

app.get('/api', function(req, res){
    res.json({firstname: 'John', lastname: 'Doe'}); // Muestra en pantalla un JSON (El creado)
});
app.listen(3000);