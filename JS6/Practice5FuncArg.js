// create a function that returns sum of numbers from 1 to n

function sum1toN(n) {
  let sum = 0; // initialized sum = 0
  for (i = 1; i <= n; i++) {
    sum = sum + i; // added i each time in previous sum
  }
  return sum; // returns the value calculated
}
let res = sum1toN(3); // passed the parameter n
console.log(res); // printed the sum
