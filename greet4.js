//Cuarto patron de modelos
//A diferencia del patron 3, en esteen vez de exportar un objeto, se instancia una funcion
//Ventaja ya que se pueden declarar mas de un require a la caché

function Greetr(){
    this.greeting = 'Hello World Again';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr;