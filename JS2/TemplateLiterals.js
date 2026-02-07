// print the total pay of pencilPrice and penPrice
let pencilPrice = 10;
let penPrice = 5;
let output = "The total pay is : " + (penPrice + pencilPrice) + " Rupees." // concatenation of strings and numbers
console.log(output);
// optimal way - use template literal 

// Template literal - used to add variable/operation in string. Syntax - `${}`    (${variable/operation} inside backtick``)
console.log(`The total pay is : ${penPrice + pencilPrice} Rupees.`) // no need for concatenation and putting string in "" again and again 
console.log(`The total pay is : ${3+2} Rupees.`)  // direct operation in ${} with string inside ``