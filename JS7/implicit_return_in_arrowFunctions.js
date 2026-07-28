// when there is "only return" work in arrow function, (no printing, no array or any CRUD operations) 
// then we use "implicit return in arrow function" - more compact/optimized one liner version of arrow functions 
// R* - only for return
// const function_name = (arg1, arg2) => {value};

// eg - generally in arrow function - 
// const add = (a,b) => {
// return a+b;
// }
// add(2,3);

// but in "implicit return in arrow functions" - const function_name = (arg1, arg2) => {value};
const add = (a,b) => a+b;
console.log(add(2,3)); //calling function by passing parameters // prints 5

const sub = (a,b) => a-b;
console.log(sub(2,3)); //calling function by passing parameters // prints -1

const mul = (a,b) => a*b;
console.log(mul(2,3)); //calling function by passing parameters // prints 6




