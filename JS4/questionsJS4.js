// JS(Part4) PracticeQuestions
// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example: if arr = [1,2,3,4,5,6,2,3] & num=2 Result should be arr=[1,3,4,5,6,3] 

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i=arr.length-1; i>=0; i--){ // i=lastindex(7), lastindex-1(6), lastindex-2(5),4,3,2,1 (backward)
  if(arr[i] === num){ // element's value at ith index in arr === value of num (compares value at each ith index to num=2)
    arr.splice(i,1); // remove that index for count 1, so removes that value indirectly
  }
}
 console.log(arr);

 //OR (both are same, gives same result, just the difference of forward and backward loop (i++ or i--))

 for(let i=0; i<=arr.length-1; i++){ // i=0thindex(0), 1st index, 2nd index, 3rd index,....till (arr.length-1)th index (forward)
  if(arr[i] === num){ // element's value at ith index in arr === value of num (compares value at each ith index to num=2)
    arr.splice(i,1); // remove that index for count 1, so removes that value indirectly
  }
}
 console.log(arr);

// Qs2. find the number of digits in a number.
// 287152

let nums = 287152;
let count = 0;
while (nums > 0) {
  nums = Math.floor(nums / 10);
  count++;
}
console.log(`Total number of digits is ${count}`);

// or 

let number = 287152;
let str = number.toString();
for(i=0; i<str.length; i++){
  console.log(`The no. ${i+1} digit in the ${number} is ${str[i]}`);
  console.log(`The total count of digits in a number ${str} is ${str.length}`);
}

// Qs3. find the sum of digits in a number.
// 287152

let numbering = 287152; 
let sums = 0; 
let copy = numbering; 
while (copy>0){
  digit = copy % 10; 
  sums += digit; 
  copy = Math.floor(copy/10);
 }
 console.log("The sum of all the digits in the number " + numbering + " is: " + sums);

// or 

let numbers = 287152;   //287152 in number/integer datatype
let Str = numbers.toString(); //287152 in string datatype
let sum = 0;
for(let i=0; i<=Str.length-1; i++){
  // sum = sum + Str[i]; is the logic 
  sum = sum + Number(Str[i]); // since (Str[i]) is element in string at ith place, Number(Str[i]) converts string back to number/integer type
} 
  console.log(`The sum of all the digits in the ${numbers} is ${sum}`);


// Qs4. Print the factorial of a number n. 
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.] 
// Example: 7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040 
// 5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 = 120 
// 3! (factorial of 3) = 1 x 2 x 3 = 6 
// 0! is always 1
let n = Number(prompt("Enter the number of which you want factorial:"));
let factorial = 1;
if (!Number.isInteger(n) || n < 0) { // Number.isInteger(n) checks whether: entered value n is of type number/integer only and not any other value than Number/integer(like NaN or string or some infinity value)
  console.log("Please enter a non-negative integer.");
}
else{
  for(let i=1; i<=n; i++){
   factorial = factorial * i;
  }
  console.log(`factorial of ${n} is ${factorial}`);
}

// Qs5. Find the largest number in an array with only positive numbers 
let array1 = [33,20,100,9,8,7];
let max = array1[0];
for(let i=0; i<array1.length; i++){
  if(array1[i]>max){
    max = array1[i];
  }
}
    console.log(`max element is ${max}`);