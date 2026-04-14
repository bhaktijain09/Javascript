// // Two variables can have same name, if where one variable is inside the function and another is global for the entire code.
// // Variables declared inside a function exist only inside that function - function Scope
// // A variable declared outside any function or block is global - Global Scope
// // eg -

isAge = 54; // global variable

function Vote(isAge){ // function declaration with arguments declared
// logic - 
if(isAge>=18){
    console.log("can vote");
}
else{
 console.log("cannot vote");   
}
console.log(isAge); // 18 (isAge) from funtion calling
} // function ends

Vote(18); // function calling with parameters passed, goes to funtion prints can vote, 18
console.log(isAge); // global variable printed 54


// Step by step, in plain language:

// A global variable isAge is created and assigned the value 54.
// A function Vote is defined with a parameter also named isAge.
// The function contains logic that checks whether the passed value is greater than or equal to 18 and prints a message accordingly.
// When Vote(18) is called, the value 18 is passed into the function.
// Inside the function, a new local variable isAge is created (the parameter), and it temporarily holds the value 18.
// The condition runs using this local value, so it prints "can vote".
// Then it prints the local isAge, which is 18.
// After the function finishes, the local variable is destroyed.
// Outside the function, the global isAge is still 54, and printing it shows 54.
