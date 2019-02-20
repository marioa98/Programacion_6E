//function statment
let greet = () =>{
    console.log("hi");
}
greet();

//function are first-class
let logGreetings = (fn) =>{
    fn();
}
logGreetings(greet);

//function expression
let greetMe = ()=>{
    console.log("Hi Mario");
}
greetMe();

//it's first-class
logGreetings(greetMe);

//use a function expression on the fly
logGreetings(()=>{
    console.log("Hola");
})