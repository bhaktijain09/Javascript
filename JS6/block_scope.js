// block scope - variable defined inside a block cannot be accessible outside the block

let age = 18;
if(age>=18){
    str = "can vote";
    console.log(str); // valid since str is accessible inside the same block where it is defined
}
// but if -
// let age = 18;
// if(age>=18){
//     str = "can vote";
// }
// console.log(str); // invalid since str is not accessible outside the block where it is defined
