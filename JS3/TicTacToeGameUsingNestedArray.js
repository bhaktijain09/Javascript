let sign = [["cross", "blank", "space"], ["cross", "space", "blank"], ["space", "blank", "cross"]];
console.log(sign);

//prints - 
// (3) [Array(3), Array(3), Array(3)] // prin
// 0 : (3) ['cross', 'blank', 'space']
// 1 : (3) ['cross', 'space', 'blank']
// 2 : (3) ['space', 'blank', 'cross']
// length : 3

console.log(sign.length); // prints 3 since 3 arrays within an array

// Now to get particular array - 
console.log(sign[0]); // prints 0th array - ['cross', 'blank', 'space']
console.log(sign[1]); // prints 1st array - ['cross', 'space', 'blank']
console.log(sign[2]); // prints 2nd array - ['space', 'blank', 'cross']

// Now to get length particular array - 
console.log(sign[0].length); // prints length of 0th array - ie length of ['cross', 'blank', 'space'] = 3 
console.log(sign[1].length); // prints length of 1st array - ie length of ['cross', 'space', 'blank'] = 3
console.log(sign[2].length); // prints length of 2nd array - ie length of ['space', 'blank', 'cross'] = 3

// Now to get particular element of particular array - 
console.log(sign[0][0]); // prints 0th index of 0th array - 'cross'
console.log(sign[0][1]); // prints 1st index of 0th array - 'blank'
console.log(sign[0][2]); // prints 2nd index of 0th array - 'space'
console.log(sign[1][0]); // prints 0th index of 1st array - 'cross'
console.log(sign[1][1]); // prints 1st index of 1st array - 'space'
console.log(sign[1][2]); // prints 2nd index of 1st array - 'blank'
console.log(sign[2][0]); // prints 0th index of 2nd array - 'space'
console.log(sign[2][1]); // prints 1st index of 2nd array - 'blank'
console.log(sign[2][2]); // prints 2nd index of 2nd array - 'cross'

// change 1st element of 2nd array to 'cross' ie ['space', 'blank', 'cross'] ie [0th, 1st, 2nd index] is the 2nd array and its 1st element is blank, so change blank to cross
// 2nd array = ['space', 'blank', 'cross'] initially
sign[2][1] = 'cross'; // assigning 1st element of 2nd array as cross (blank previously)
console.log(sign[2]); //printing 2nd array gives ['space', 'cross', 'cross'] now after assigning
// changes ['space', 'blank', 'cross'] to ['space', 'cross', 'cross']