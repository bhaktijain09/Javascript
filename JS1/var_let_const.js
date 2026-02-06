// var, let, const

//1.var
var score = 99;   //allows redeclaration
var score = 98;
console.log(score)



//2.let

// case1 of let
let point;   //allows giving value to variable after declared but doesn't allow redeclaration of the same variable
point = 97; //assisgning value after declaration of variable point previously
console.log(point)
// let point = 98;  //redeclaration of let not allowed

// case2 of let
let measurement = 96; //allows giving value to variable at the same time as declared but doesn't allow redeclaration of the same variable
console.log(measurement)
// let measurement = 98;  //redeclaration of let not allowed



//3.const
const value = 95;  // have to declare value to the variable at the same time when variable is declared and cannot be redeclared
// const value = 94; //not allowed const value already declared
console.log(value)