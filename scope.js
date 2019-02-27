let firstname = 'Jane';

//Al poner una funcion dentro de parentesis, esta solo afectará a lo que está dentro de estos


/*IIFE Function -> Inmediate Invoke Function Expression*/
(function(){
    let firstname = 'John';
    console.log(firstname);
}('Doe')  /*Con estos parentesis se invoca la funcion interna de los parentesis*/);

//Imprimira Jane, no John, porque la funcion no afecta
console.log(firstname);


