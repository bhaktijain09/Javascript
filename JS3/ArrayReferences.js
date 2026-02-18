// Array Address = Array Reference (Address = Reference)

console.log("name" == "name");// true in case of string with (==)
console.log("name" === "name"); // true in case of string (===)

console.log([1] == [1]); // points to different memory address even if same value
//[1] === [1]; and [1] == [1]; returns false beacuse they are stored at different memory addresses even if they contain the same value
//false in case of array, false because [1] === [1] compares two different array objects
//even though they contain the same value, they are stored at different memory addresses. 
//Since the references are different, the comparison returns false.

// To make two arrays equal and return true, we have to assign one array to another.
let characters = ["a", "c", "g", "h", "d"];
let charactersCopy = characters; // assigned array1 to array2
console.log(charactersCopy); // print array2
console.log(characters == charactersCopy); //checking if array1 == array2 returns true, therefore two arrays are equal pointing to same address
// Now any changes made in characters will be reflected in charactersCopy or any changes made in charactersCopy will be reflected in characters
characters.push("bhakti"); //changes made in characters
console.log(characters);  // reflected in characters
console.log(charactersCopy);  // reflected in charactersCopy as well since both arrays are equivalent

// Now I want changes in character but not in characterCopy, then redefine the characterCopy 
// both array will have different addresses and same changes will not be reflected

