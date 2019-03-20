let EventEmitter = require('events');
let utils = require('util');


function Greetr(){
    EventEmitter.call(this);
    this.greeting = 'Hello World ';
}

utils.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting+": "+data);
    this.emit('greet '+data); //emit() es un metodo de la libreria events, y por prototype chain, Greetr lo hereda
}

let greet1 = new Greetr();

greet1.on('greet', function(data){
    console.log('Someone greeted: '+data);
});

greet1.greet('Tony');