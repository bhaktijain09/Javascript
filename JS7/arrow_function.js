// const function = (arg1, arg2) => {function definition/value}
// const sum = (a, b) => {definition is to print a+b}

//eg1-
const sum = (a,b) => {
console.log(a+b);
}
sum(1,2);

//eg2- // const array = (a,b,c,d) => {definition is to create an array(fruits) of arguments passed(a,b,c,d) in function(basket), the array is sliced and creates a copy (result) of sliced array, then the original array(fruits) is spliced then array after splicing(fruits) is printed
// const array = (a,b,c,d) => {create array fruits, take its elements from arguments of function, slice the array(creates new copy), splice the array(mutates original copy)
const basket = (a,b,c,d) => {
let fruits = [a,b,c,d];
let result = fruits.slice(0,2) // starting from index[0], gives/select 2 items 
console.log(result); // ie prints [apple, mango]
fruits.splice(0,1); // starting from index[0], delete 1 item, gives spliced/removed element [apple] if printed
console.log(fruits); // now the remaining elements after splicing apple is [mango, banana, litchi]
}
basket("apple", "mango", "banana", "litchi");