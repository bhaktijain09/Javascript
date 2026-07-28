//Q1 - Check if all numbers in our array are multiples of 10 or not.
let numsQ = [10,20,30,40,50,60,70,80,90,100];
let multipleof10 = numsQ.every((element) => {
    if(element%10 == 0){
        return true;
    }
    else{
        return false;
    }
});
console.log(multipleof10);

//OR 
// let multipleof10 = numsQ.every(element => element % 10 == 0);




//Q2 - Create a function to find the minimum number in the array - 
let Min_Number = numsQ.reduce((minNum, element) => {
    if(minNum<element){
        return minNum;
    }
    else{
        return element;
    }
});
console.log(Min_Number);

//OR using ternary operator
let Min_Number = numsQ.reduce((minNum, element) => {
    return minNum < element ? minNum : element;
});

console.log(Min_Number);