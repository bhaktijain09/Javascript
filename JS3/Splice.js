// splice(start, deleteCount, item 0 to item N);
let things = ["toy", "brush", "comb", "hankerchief", "blanket", "bag"];
things.splice(4); // all the things from index 4 to so on will be deleted // blanket, bag will be deleted
console.log(things); // we get "toy", "brush", "comb", "hankerchief"
things.splice(0,1); // starting from index 0, delete 1 element
console.log(things); // we get "brush", "comb", "hankerchief"
things.splice(0,1, "paper", "bottle"); // starting from index 0(brush), delete 1(brush) element and replace it by next elements("paper", "bottle") mentioned
console.log(things); // we get "paper", "bottle", "comb", "hankerchief"

// Challenge question - To add element in between array
// add "hanger" in between "bottle" and "comb" ie want it at index2 - where things = ["paper", "bottle", "comb", "hankerchief"]
things.splice(2, 0, "hanger"); // start from 2nd index(comb) delete nothing(0) but add element "hanger" (working - adds comb at index2 only and the later array is shifted)
console.log(things); // we get "paper", "bottle", "hanger", "comb", "hankerchief"

// replace hankerchief by handwash in the array - "paper", "bottle", "hanger", "comb", "hankerchief"
things.splice(4,1,"handwash"); // starting at index4 ie hankerchief, delete 1 ie hankerchief and add handwash at it's place
console.log(things);


// Difference between slice and splice is -

// slice - 
// makes the new array of selected elements and original remains unaffected
// Returns: A new array with the selected elements. (slice)
// Original Array: Unchanged.

// splice - 
// makes changes and updates the original array updated at every stage
// Returns: An array after removed elements.
// Original Array: Modified.

//slice is in method6 of StringMethods.js 

// eg - 
let rainbow = ["v", "i", "b", "g", "y", "o", "r"];

let slicedArray = rainbow.slice(0,5); // gives slice from startindex(0) to lastindex(5) - ["v", "i", "b", "g", "y", "o"]
console.log(rainbow); // prints priginal array ["v", "i", "b", "g", "y", "o", "r"] only - (orginal)
console.log(slicedArray); // prints sliced array ["v", "i", "b", "g", "y", "o"] only - (sliced)
// original remains unaffected, updated or sliced is stored in slicedArray

rainbow.splice(0,2); // start from 0th index, delete 2 elements so deletes "v", "i", "b"
console.log(rainbow); // gives the updation in the original array itself -  we get - ["g", "y", "o", "r"] in original array rainbow itself

// slice -
// types - slice(startindex), slice(startindex, lastindex), .slice(-num) = .slice(length-num)
// Returns: A new array with the selected elements.
// Original Array: Unchanged.

// splice - 
// types - splice(start), splice(start, deleteCount), splice(start, deleteCount, item 0 to item N)
// Returns: An array remained after removed elements.
// Original Array: Modified.

// So basically, array = total elements
// slice = selected elements array
// splice = array after removing selected elements

