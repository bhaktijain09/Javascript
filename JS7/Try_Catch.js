// try and catch are used when you are not sure about a block of code if will throw error or will run smoothly, 
// you put it in try and catch 

// Write a try block to include the code you want to execute.
// Add a catch block immediately after the try block to handle any errors that occur.

// ie 
// try{
// unsure block of code 
// } 
// catch {
//   execute this(any line of code/action) if error occurs
// }

try{
console.log(a);
}
catch(e){   // e denotes error
console.log("error");
}  // prints error since a was never defined so goes to catch to throw error

let a = 10;
try{
console.log(a);
}
catch(error){
console.log("error");
} // prints 10 (a's value) since a was defined so goes to try and execute block of code ie console.log(a);


// why use try and catch -
// generally while executing lines of code, if youre suspicious whether particular line of code will execute or will throw error 
// and if it actually throws error then the entire code after error occured does not execute unless you solve error, resulting in site crashing
// thus, try and catch handles it by "even if error occured it will be handled by catch and the lines of code after that will continue running
// and no site will crash