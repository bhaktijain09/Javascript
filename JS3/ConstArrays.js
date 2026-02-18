const price = [1,2,3];
console.log(price); // prints 1,2,3
price.push(4);
console.log(price); // prints 1,2,3,4
price.pop(); // pops 1,2,3
console.log(price); // prints 1,2,3
price.pop(); // prints error because now after again poping the original const array gets affected
// In const, operations can be performed until original const array is not affected 
// and new values to const variable is not assigned again
// let price = [1,2,3]; // error because price is const and already assigned array value previously so no reassignment allowed