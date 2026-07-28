// reduce() - is used whenever you want to combine all the elements of an array into a single result.
let nums = [1,2,3,4];
let finalValue = nums.reduce((result7, element) => result7 + element); // sum of all elements in the array
console.log(finalValue);

let finalValue1 = nums.reduce((result8, element) => result8 * element); // product of all elements in the array
console.log(finalValue1);
