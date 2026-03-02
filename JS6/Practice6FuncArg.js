// create a function that returns concatenation of all the strings in an array.

let Array = ["You", "are", "going", "to", "get", "placed", "Bhakti!", "Mark", "my", "words."];

function concatStringArray(Array){ // argument

let finalArray = ""; // empty string initialization, just like sum=0 initialization

// logic - just like sum of 1 to n
for(let i=0; i<=Array.length-1; i++){
    finalArray = finalArray + Array[i];
}
return finalArray; // return 
}
// let Array = ["You", " ", "are", " ", "going", " ", "to", " ", "get", " ", "placed", " ", "Bhakti!", " ", "Mark", " ", "my", " ", "words."];
let resulting = concatStringArray(Array.join(" ")); // parameter
console.log(resulting);