// // Q1. WAP to print first n elements of an array, n can be any positive number
let array1 = ["1", "2", "4", "3","5"]; // ARRAY
let n1 = Number(prompt("Enter the number n to print first n elements:")); //Took number n to print first n1 elements // prompt() returns a string, so it's better to convert it to a Number so used Number before prompt.
if (n1 > 0) {
    console.log(array1.slice(0,n1)); // selects the elements from (startindex 0, lastindex n1)
} else {
    console.log("Please enter a positive number");
}
// // if i give n=3 So it returns elements from index 0 to n - 1 then i get array of index0, index1, index2 as ["1", "2", "4"]
// // so if n=3, array from 0 to (n-1) = 3-1 = 2 , [index0, index1, index2] as  ["1", "2", "4"] in our case


// Q2. Write a JavaScript program to get the last n elements of an array.
// // [n can be any positive number]. 
// // For example: for array [7,9,0,-2] and n=3 Print [9,0,-2]
array2 = [7,9,0,-2];
let n2 = Number(prompt("Enter the number of last n2 elements to be printed from an array:"));
console.log(array2.slice(-n2)); // slices and prints (array.length - n2) elements from the array given
// // if i enter n2=3, last 3(n2) elements from the array printed are [9,0,-2] // 


// // Q3. Write a JavaScript program to check whether a string is blank or not.
let string1 = prompt("enter the string"); // string is stored in string1 variable
if(string1.trim().length !== 0){ // string1 value is trimmed, if trimmed string1 is not equal to 0 then non blank string
    console.log("non empty string");
}                             // used truthy-falsy concept as well where condition is structured in such a way that false value(empty string) lies in else condition
else{
   console.log("empty string"); 
}

// //Q4. Write a JavaScript program to test whether the character at the given(character) index is lowercase
let String = prompt("enter the string:"); //input string
let indexNumber = prompt("enter the index number of string to check if in lowercase or not:"); // input index number 
if(String[indexNumber] === String[indexNumber].toLowerCase()){ //character at a particular indexNumber of String = character at a particular indexNumber of String in lowercase
    console.log(`character at index ${indexNumber} of string ${String} is "${String[indexNumber]}" and in lowercase`);
}
else{
    console.log(`character at index ${indexNumber} of string ${String} is "${String[indexNumber]}" and is not in lowercase`);
}

// // Q5. Write a JavaScript program to strip leading and trailing spaces from a string
// // breaking down problem -
// // strip = trim();
// // leading = starting
// // trailing = ending

let sentence2 = prompt("Enter the string to strip leading and trailing:"); // input = "  hello  "
console.log(`The trimmed string of original string ${sentence2} is ${sentence2.trim()}`); // output - "hello"
// case1 -
// input = "  hello  "
// output - "hello"
// case2 -
// input = "  he  llo  "
// output - "he  llo"


// Q6. Write a JavaScript program to check if an element exists in an array or not.
let existingElement = [1,2,3,4,5,6];
let NumberA = Number(prompt("Enter the number to check if it exists in array or not:"));
let ans = existingElement.includes(NumberA); //array.includes(input_number) is the logic
console.log(ans); // true = number exists, false = number doesn't exists

//  or 
let existingElements = [1,2,3,4,5,6];
let NumberB = Number(prompt("Enter the number to check if it exists in array or not:"));
if(existingElements.indexOf(NumberB) !== -1){
console.log(`Element ${NumberB} exist in the array ${existingElements}`);
}
else{
console.log(`Element ${NumberB} does not exist in the array ${existingElements}`);
}
