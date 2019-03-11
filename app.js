let person = {
    firtsName: '',
    lastName: '',
    greet: function(){
        return this.firtsName + ' '+this.lastName;
    }
}

/*Los objetos john y jane no contienenn ningun atributo, sin embargo, al heredar del objeto person,
obtienen los atributos*/

let john = Object.create(person);
john.firtsName = 'John';
john.lastName = 'Walker';

let jane = Object.create(person);
jane.firtsName = 'Jane';
jane.lastName = 'Foster';

console.log(john.greet());
console.log(jane.greet());

//=========================================================================================================0

/*El objeto Greetr solo contiene el atributo greetign, sin embargo con la cadena de prototipado 
este objeto hereda las propiedades del objeto EventEmitter, el cual es un objeto que usa la libreria 'events*/

let EventEmitter = require('events');
let utils = require('util');


function Greetr(){
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

//=====================================================================================================================

let obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}


//Con los metodos call y apply permiten modificar las propiedades del objeto
obj.greet();
obj.greet.call({name: 'John Doe'});
obj.greet.apply({name: 'Jane Doe'});