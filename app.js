//Object properties and methods
let obj ={
    greet: 'Hello'
}

//se  accede al objeto
console.log(obj.greet);

//Se accede a la propiedad del objeto de acuerdo al indice
console.log(obj['greet']);

//Se accede a una propiedad especifica del objeto
let prop = 'greet';
console.log(obj[prop]);

//Functions and arrays
let arr = [];

//===========================================================================

//Se van agregando items a la array (en este caso se van ingresando funciones)
arr.push(function(){
    console.log('Hello World 1');
});

arr.push(function(){
    console.log('Hello World 2');
});

arr.push(function(){
    console.log('Hello World 3');
});

//=============================================================================

//Se va accediendo a cada uno de los elementos del array
arr.forEach(function(item){
    item();
});

let Emitter = require('./emitter');
let emtr = new Emitter();
let eventConfig = require('./config').events;

emtr.on(eventConfig.GREET, function(){
    console.log('Otra vez el mismo pinche hello');
});

emtr.on('greet', function(){
    console.log('O que la madre');
});

console.log('Hello como por milesima vez');
emtr.emit('greet');