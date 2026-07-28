//.every - XOR mechanism - (1,1 = 1 (all true then true) else 0)
// returns true when every element in the array holds true
// returns false when even a single number holds false 

let ARRAY = [2,4,6,8];
let result4 = ARRAY.every((element) => {
    return element%2 == 0; //even number logic
});
console.log(result4); // returns true since all number in array are even

//But what if one number in the array is odd
let ARRAY1 = [2,4,6,8,1];
let result5 = ARRAY1.every((element) => {
    return element%2 == 0; //even number logic
});
console.log(result5); // returns false since all number in array are even except one number(1)




//.some - 
// Returns true if at least one element satisfies the condition.
// Returns false if no elements satisfy the condition.

 let ARRAY2 = [1,2,3,4];
 let result6 = ARRAY2.some((element) => {
    return element%2==0; // only some number in the array are even, so true
 });
 console.log(result6);


// What if all the elements satisfy the condition?
let ARRAY3 = [2, 4, 6, 8];

let result7 = ARRAY3.some((element) => {
    // some() returns true if at least one element satisfies the condition.
    // Here, all elements are even, so "at least one" is also true.
    return element % 2 == 0;
});

console.log(result7);