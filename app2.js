let util = require('util');

//Super constructor
function Person(){
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function(){
    console.log('Hello '+this.firstname+' '+this.lastname);
}

function Policeman(){
    this.badgenumber = '1234';
    Person.call(this); //Llama al super constructor
}


util.inherits(Policeman, Person);
let officer = new Policeman(); //Nuevo objeto Policeman
officer.greet(); //Se invoca el metodo greet

