let arr = ['toyota', 'maruti', 'scorpio'];
console.log(arr[0]); // prints toyota
console.log(arr[1]); // prints maruti
console.log(arr[2]); // prints scorpio
console.log(arr.length); // prints 3
console.log(arr[0][0]); // prints t ie prints 0th element of 0th index
console.log(arr[1][3]); // prints u ie prints 1st element of 3rd index
console.log(arr[2][6]); // prints o ie prints 2nd element of 6th index

//Strings are immutable but Arrays are mutable -
let fruits = ['Apple', 'Mango', 'Banana'];
console.log(fruits); // prints ['Apple', 'Mango', 'Banana']
fruits[0] = 'litchi'; // changes 0th index element to litchi
console.log(fruits); // prints ['litchi', 'Mango', 'Banana'] - array mutate
console.log(fruits.length); // prints 3
fruits[10] = 'papaya'; // adds papaya at 10th index
console.log(fruits); //['litchi', 'Mango', 'Banana', empty × 7, 'papaya'] ie papaya at 10th and inbetween 7 are empty 
console.log(fruits.length); //so length becomes 11 ie 0 to 10th

