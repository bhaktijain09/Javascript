function sum(a,b){
return a+b;
}
sum(1,8); // returns value stored in sum but doesn't print.

// return saves the value in the sum(variable) but doesn't print it.
// inorder to print it, you have to save the value after passing parameters and print it by console.log();

function sum(a,b){
return a+b;
}
let result = sum(1,8);
console.log(result); // prints 9


//case - any statement after return cannot be executed

function sum(a,b){
console.log("hello"); // can print a statement since it's before return keyword in function
return a+b;
console.log("hello"); // cannot print a statement after return
}

console.log("hello"); //print a statement after return since function bracket having return is now closed
let results = sum(1,8);
console.log(results); // prints 9
