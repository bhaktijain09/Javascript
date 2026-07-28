// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
const arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i]
  }
  return sum / arr.length;
};

console.log(arrayAverage([1, 2, 3]));

// Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
const isEven = (n) => {
  return n % 2 == 0;
};
console.log(isEven(2)); // true (true)
console.log(isEven(3)); // false (odd)

// What is the output of the following code:
const object = {
message: 'Hello, World!',
logMessage(){
console.log(this.message);
}
};
console.log(setTimeout(object.logMessage,1000));
// ans - undefined
// If object.logMessage() is called, it returns "Hello, World!" because object calls the method, so this refers to object. 
// However, in setTimeout(object.logMessage, 1000), setTimeout calls the function instead of object, so this is not object. 
// Therefore, this.message is undefined.

// Q4. What is the output of the following code:
let length = 4;
function callback() {
  
  console.log(this.length);
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2);
// OUTPUT - Nothing, because function callback is never called, just defined
