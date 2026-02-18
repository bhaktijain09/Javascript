
// Arrays questions - //output should be for the given question - ['July', 'June', 'March', 'August']; 
let months = ['January', 'July', 'March', 'August']; // given
months.shift(); //removes 0th , prints 'July', 'March', 'August'
months.shift(); //removes 0th , prints 'March', 'August'
months.unshift('June'); // adds at 0th , prints 'June', 'March', 'August'
months.unshift('July'); // adds at 0th , prints 'July', 'June', 'March', 'August'
console.log(months);  // prints 'July', 'June', 'March', 'August'

//array questions - 
let arrmonths = ["january", "july", "march", "august"];
// convert it to ["july", "june", "march", "august"] 
arrmonths.splice(0,2); //starting from 0 delete 2 elements ie january, june  we get "march", "august"
arrmonths.splice(0,0,"july", "june"); // start from 0, delete nothing add july, june
console.log(arrmonths);

// return the index of javascript from the array if it was reversed.
let languages = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// let reverseLanguage = languages.reverse(); // reverse the array - "sql", "c#", "java", "python", "javascript", "html", "c++", "c"
// console.log(reverseLanguage.indexOf("javascript")); // indexOf javascript is 4 and printed it using console.log();

// or 
console.log(languages.reverse().indexOf("javascript"));