let arr = [1,2,3,4,5];

//.map - Transform every element into a new array
let result = arr.map((element) => {
return element*2;
});
console.log(result);

//.filter - Keep only elements that satisfy a condition
let result2 = arr.filter((element) => {
    if(element>=3){
        return true;
    }
    else{
        return false;
    }
});
console.log(result2);

//prints only even number
let isEven = arr.filter((element) => {
    return element%2 == 0; // element%2 == 0
});
console.log(isEven);

//prints only odd number
let isOdd = arr.filter((element) => {
    return element%2 != 0; //  element%2 != 0
});
console.log(isOdd);