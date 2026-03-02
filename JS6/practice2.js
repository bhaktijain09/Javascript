// create a function to roll a dice and always display the value of the dice between 1 to 6

function dice(){
console.log(Math.floor(Math.random() * 6) + 1);
}

dice();


/*
Math.random() generates a number where:
0 ≤ num < 1 ie 0.893298, 0.2433,...

Multiplying by 6:
0 ≤ num < 6 ie 0.893298, 1.2433, 2.2433, 3.893298, 4.2433, 5.893298

Math.floor() converts that into:
0, 1, 2, 3, 4, 5 ie 0.893298 to 0, 1.2433 to 1, 2.2433 to 2, 3.893298 to 3, 4.2433 to 4, 5.893298 to 5

Adding 1 shifts the range to:
1, 2, 3, 4, 5, 6
*/

// Math.random() → range: 0 ≤ n < 1
// * 6 → range: 0 ≤ n < 6
// Math.floor() → integers: 0, 1, 2, 3, 4, 5
// + 1 → 1, 2, 3, 4, 5, 6