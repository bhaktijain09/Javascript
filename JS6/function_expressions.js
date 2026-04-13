// Function Expression - use case - to redefine function just as we redefine variable
// function is saved in variable 
// define a function with lofic and save it in a variable then call a variable

let sums = function(a,b){
    return a+b;
}
sums(1,2); // calling function stored in variable sum // prints 3

let greeting = function(){
    console.log("hello");
}
greeting(); // calling function stored in variable greet // prints hello

// same function greeting can be redefined just as we redefine variable 

greeting = function(){
    console.log("Bhakti");
}
greeting(); // calling function stored in variable greet // prints hello