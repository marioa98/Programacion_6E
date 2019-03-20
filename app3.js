'use strict'; //Hace un buen uso en sintaxis

class Person{
    constructor(firstname, lastaname){
        this.firstname = firstname;
        this.lastaname = lastaname;
    }

    greet(){
        console.log('Hello '+this.firstname+' '+this.lastaname);
    }
}

let john = new Person('John','Doe');
john.greet();

let jane = new Person('Jane', 'Doe');
jane.greet();