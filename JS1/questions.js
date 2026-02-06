// what is the value of age after this code runs? 
let age = 23;

age + 2; 
console.log(age);  //case1
// output - 23
age = age + 2; 
console.log(age);  //case2
// output - 25


// what is the value of avg after this code runs?
let eng = 80;
let hindi = 90;
let maths = 100;
let avg = (hindi + eng + maths)/ 3;
console.log(avg);
// output - (80+90+100)/3 = 90


// Topic - unary operaors 
let num = 5;
let newNum = num++; // newNum = 6 (use 5 then increment to 5 to 6) so use = 5
newNum = ++num; // newNum = 7 (increment 6 to 7 then use 7) so use = 7
// final ans 7


// find the erros - 

// let 1age = 12;
// let 2age = 13;
// corrected - variable name cannot start with a number
 let age1 = 12;
 let age2 = 13;


// let Marks = 75;
// let isPass = True;
// corrected - True does not hold a meaning in javascript, true does!
let Marks = 75;
let isPass = true;

let is_pass = 'true';
// let is_pass = 'true'; 
// holds correct for a string when in '' or "" and not for a boolean value
// for boolean value => let is_pass = true;

//final assignment questions - 

// 1. declare your name as string and print its length in javascript
let myname = "Bhakti";
myname.length;

// 2. declare your name as string and print its first character 
myname[0]; // index 0 for first character

// 3. declare your name as string and print its last character 
myname[5]; // index 5 for last character or
myname[myname.length - 1]; // myname[6 - 1]; myname[5]; ==> i

// output of foll. code - 
"apnacollege" + 123;  // output - apnacollege123

// what are the length of empty string and a string with single space
let empty = ""; 
let singleSpace = " ";
empty.length; // output - 0
singleSpace.length; // output - 1