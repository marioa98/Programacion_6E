//Metodo constructor
function Emitter(){
    this.events = {};
}

//Listener es una funcion a la espera de un evento
//En el caso de que no se envie nada, se agregara a la array un objeto vacio
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

//Mediante un ciclo y despues de reaccionar al evento, se dara respuesta
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

//Se exorta la clase mediante el constructor
module.exports = Emitter;