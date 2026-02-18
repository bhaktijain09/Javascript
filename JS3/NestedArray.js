// Nested Arrays refers to array within an array - 
// eg - 
// [1,2]
// [4,6]
// [8,9]

//print array, length of array, particular array within array, length of particular array within array, particular index of array within array, 

let matrixArray = [[1,2], [4,6], [8,9]];
console.log(matrixArray); // prints the array -  [[1,2], [4,6], [8,9]]
console.log(matrixArray.length); // prints the total length of array - 3 ie [Array(2), Array(2), Array(2)]

// print particular array within array - 
// print 0th array -
console.log(matrixArray[0]); // prints [1,2]
// print 1st array -
console.log(matrixArray[1]); // prints [4,6]
// print 2nd array -
console.log(matrixArray[2]); // prints [8,9]

//length of particular array within array
// print length of 0th array - 2 (since [1,2] has length 2)
console.log(matrixArray[0].length);
// print length of 1st array - 2 (since [4,6] has length 2)
console.log(matrixArray[1].length);
// print length of 2nd array - 2 (since [8,9] has length 2)
console.log(matrixArray[2].length);

//To print the element of array at specific index given
// ie [1st array = [0th array = [0th element][1st element], 1st array = [0th element][1st element], 2nd array = [0th element][1st element]];
// To print 1 ie 1st element of 1st array - [0][0]
console.log(matrixArray[0][0]);
// To print 2 ie 2nd element of 1st array - [0][1]
console.log(matrixArray[0][1]);
// To print 4 ie 1st element of 2nd array - [1][0]
console.log(matrixArray[1][0]);
// To print 4 ie 2nd element of 2nd array - [1][1]
console.log(matrixArray[1][1]);
// To print 8 ie 1st element of 3rd array - [2][0]
console.log(matrixArray[2][0]);
// To print 9 ie 2nd element of 3rd array - [2][1]
console.log(matrixArray[2][1]);











