//objects

//Object literal
// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     greet: function(){
//         console.log("Hello " + this.firstname + " " + this.lastname);
//     }
// }

// person.greet();
// console.log(person['firstname']);


//Prototypal Inheritance and Function Constructor

//Function constructor
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

//Herencia entre estos compas

//Prototipo
Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();