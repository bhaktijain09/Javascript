// To get a value of a particular key from object, // we use object.key or object["key"];
let marks = {
    name: "Bhakti",
    city: ["MUMBAI", "BHUSAWAL"],
    maths: 95,
    english: 94, 
    economics: 89,
    finance: 90
};

// syntax -  we use object.key or object["key"]; // we get value
console.log(marks.name); 
//or 
console.log(marks["name"]);  
// prints "Bhakti"

console.log(marks.maths);
// or
console.log(marks["maths"]);
// prints 95

console.log(marks.city);
// or
console.log(marks["city"]);
// prints ["MUMBAI", "BHUSAWAL"]

console.log(marks.city[0]);
// or
console.log(marks["city"][0]); //element at "index 0" of array "city"
// prints undefined

console.log(marks.city[1]);
// or
console.log(marks["city"][1]); //element at "index 1" of array "city"
// prints undefined

// learnings -
// marks - object
// marks.city - array
// marks.city[0] - element inside array
