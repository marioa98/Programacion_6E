const express = require('express');
const app = express();
const mongoose = require('mongoose');


/* 
    Se realiza una unica conexion a una base de datos de MongoDB, asimismo se establece el puerto 
    en donde se realizará la conexión local en el navegador y se definirá la estructura de la base de datos
*/

var port = process.env.PORT || 3000; //Ruta para realizar GET en el navegador y servidor local
mongoose.connect('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac'); //Conexión a la base de datos MongoDB
let schema = mongoose.Schema; //se establece un nuevo schema

//Se define la estructura del schema que se va a almacenar en la base de datos
let nameSchema = new schema({
    firstname : String
});

let name = mongoose.model('Person', nameSchema);

app.get('/', (req, res) => {
	res.send('<html><head></head><body> <h1>hi</h1> </body></html>');
});

app.get('/person/:id', (req, res) => {
	res.send(`<html><head></head><body> <h1>${req.params.id}</h1> </body></html>`);
});

app.get('/api', (req, res) => {
	res.json({
		firstname: 'Gerald',
		lastname: 'Amezcua'
	});
});

app.get('/profile/:id', (req, res)=>{
    
    let john = name({
        firstname : `${req.params.id}`
    })

    john.save(function (err) {
        if(err) throw err;

        res.send(`<html><head></head><body> <h1>${req.params.id}</h1> </body></html>`);
    })

});

app.listen(port);