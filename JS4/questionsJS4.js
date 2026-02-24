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

