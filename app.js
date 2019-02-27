//Constructor de la clae

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

/*Funcion prototipo de nombre greet

Los prototipos tienen herencia, en este caso hereda del objeto Person*/

Person.prototype.greet = function(){
    console.log("Hello "+this.firstName+" "+this.lastName);
}

let john = new Person('John', 'Doe');
john.greet();

let jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);


//Valores primitivos y funciones, un valor primitivo es aquel que solo tiene un valor (int, string,etc)

/*Pasar por valores, en esto, la variable a no cambia, pero la variable en la funcion si*/
function change(b){
    b = 2;
}

let a = 1;
change(a);
console.log(a);

/*Al pasar datos por referencia, se pasan objetos y los valores cambian tanto en la funcion como en el objeto*/

function changeObj(d){
    d.prop1 = function(){};
    d.prop2 = {};
}

let c = {}; //Representa un objeto vacio
c.prop1 = {};
changeObj(c);
console.log(c);