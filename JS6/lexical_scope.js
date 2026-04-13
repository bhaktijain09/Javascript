// case1 - function greetinner never called
let greet = "namaste"; // global scope

function greetouter() {
  let greet = "hello"; // function scope
  console.log(greet);
  function greetinner() {
    console.log(greet); 
  }  // inner function closed
}  // outer function closed

console.log(greet); // global variable printed - namaste
greetouter(); // function variable called - hello
// inner block function greetinner is never called so prints undefined

// function should be called instantly after function defined ie block scope
// output - 
// namaste 
// hello
// undefined

// case2 - function greetinner called in block scope - valid
// if want to print/execute inner greetinner function then it should be called instantly after function greetinner is defined ie block scope
let greet2 = "namaste"; // global scope

function greetouter2() {
  let greet2 = "hello"; // function scope
  console.log(greet2);
  function greetinner2() {
    console.log(greet2);
  }  // inner function closed
  greetinner2(); // lexical scope - inner function called and takes outer parent(greetouter) variable value reference(hello) to print greet2 variable
}  // outer function closed

console.log(greet2); // global variable printed - namaste
greetouter2(); // function variable called - hello

// output - 
// namaste 
// hello
// hello

// case3 - function greetinner called outside block scope - invalid
// invalid block scope - 
let greet3 = "namaste"; // global scope

function greetouter3() {
  let greet3 = "hello"; // function scope
  console.log(greet3);
  function greetinner3() {
    console.log(greet3); // lexical scope
  } // inner function closed
} // outer function closed

console.log(greet3); // global variable printed - namaste
greetouter3(); // function variable called - hello
greetinner3(); // inner function called outside its block scope


// output - 
// namaste 
// hello
// undefined reference error
