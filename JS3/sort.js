let alphabets = ["b", "z", "g", "h", "a"];
alphabets.sort();
console.log(alphabets);

let words = ["ferrari", "xuv", "toyota", "scorpio", "thar"];
words.sort();
console.log(words); //prints string according to first letter alphabetically

let age = ["99", "89", "67", "42", "100"];
age.sort();
console.log(age); // doesn't work for numbers because it converts numbers to string and then sorts it alphabetically
