//Con este patron solo se exporta lo que se desea, en lugar de un constructor o un objeto completo
//Por ejemplo, la variable greeting no esta accesible

//Se exporta un objeto personalizado

let greeting = 'Hello World';

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}