'use strict';
//Ejercicio con clases ES6
let EventEmitter = require('events');
let util = require('util');

class Greetr extends EventEmitter{ //Hereda funciones de EventEmitter
    constructor(){
        super(); //Se manda a llamar al super constructor
        this.greeting = 'Hello World'; //Atributo de la clase Greetr
    }
    greet(data){
        this.on('greet', function(data){ //Metodo heredado de greetr
            console.log('Metodo heredado');
        })
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

let greetr = new Greetr();
greetr.greet('Mario');