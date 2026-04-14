// Higher Order Functions is a function which takes one or more function as an argument and returns a function.
// ie a function(GreetHigher), takes one or more functions(message) as arguments, and then returns a function(GreetHigher)

function GreetHigher(func, n){ // higher order function
    for(let i=1; i<=n; i++){
        func();
    }
}

let message = function(){
    console.log("Good Morning");
}
let message2 = function(){
    console.log("Good Evening");
}


GreetHigher(message, 5); // higher function(GreetHigher) called runs loop for n(n) times and calls the function passed as the parameter defined individually(message)(message2)
GreetHigher(message2, 6);