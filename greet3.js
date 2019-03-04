
//Patrones de modulos
//Clase que exporta un objeto completo

function Greetr(){
    this.greeting = 'Hello World';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();  //Se exporta todo el objeto Greetr