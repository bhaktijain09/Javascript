// alert(); // gives or pops alert window
alert("DANGER!");
// console.error();
console.error("Invalid password msg");
// console.warn();
console.warn("This is a warning msg");
// prompt();   // gives or pops window to take input
prompt("Enter your roll no.");

// eg- 
let roll = prompt("Enter your roll no.");
console.log(roll);
let pass  = prompt("Enter your password");
console.error("Invalid password format, try again! is error");
console.warn("you cannot modify the changes after submission is warning");
alert("password already exists is alert");

// use case of prompt and alert together - 
let first = prompt("Enter your first name :");
let last = prompt("Enter your last name :");
alert("Welcome " + first + " " + last + " to our platform!")

