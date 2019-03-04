//El primer patron(clase greet) se hizo en la Clase_2 en github

let greet2 = require('./greet2').greet;
greet2();

let greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello World';

//require solo se puede instanciar una vez, por eso, siempre apuntará a la misma direccion de memoria
//Entonces al momento de cambiar el saludo (greet3.greeting), en la segunda instancia se imprime el cambio

let greet3b = require('./greet3');
greet3b.greet();

let greet4 = require('./greet4');
let grt = new greet4();
grt.greet();

let greet5 = new require('./greet5').greet;
greet5();