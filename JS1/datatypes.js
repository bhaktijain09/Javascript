//Datatypes in javascript are - 
// Number - 9439893, 939, 9389.848, 9  (all)
// String - "wduhy" or 'dywh'
// Boolean - true or false
// Undefined - not assigned any value then undefined, eg - var a;
// Null - assigned null value, eg - var a = null;
// Symbol (not often used)
// Bignit (not often used)


//1. String -
let firstname = "Bhakti"
let lastname = "Jain"
console.log(firstname,lastname)
//output - Bhakti Jain  (console.log by default seperates by space if comma)

//concatination

// Method 1 using + operator
console.log(firstname+lastname)
//output - BhaktiJain  //joins
console.log(firstname +" "+ lastname)
//output - Bhakti Jain //joins with space


// Method 2 using template literals 
let fullname = `My name is  ${firstname} ${lastname}`;   // `` is backtick used to declare using template literals
console.log(fullname)


//Getting string characters
console.log(firstname[0]) //B  (B-0 h-1 a-2 k-3 t-4 i-5)
console.log(lastname[3])  //n  (J-0 a-1 i-2 n-3)

// String Methods
console.log(firstname.toUpperCase());
console.log(lastname.toLowerCase());


//.trim() trims white spaces in the string
let hobbies = "   code reading running   "
let result = hobbies.trim()

console.log(hobbies) // original
console.log(result)  // trimmed

//indexOf

let cart = "cart is working" //c-0 a-1 r-2 t-3 space-4 i-5 s-6 space-7 w-8 o-9 r-10 k-11 i-12 n-13 g-14
console.log(cart.indexOf("cart")) //0 since c starts at 0 
console.log(cart.indexOf("is")) //5 since i starts at 5
console.log(cart.indexOf("working")) //8 since w starts at 8 
//lastIndexOf states index of word last time used eg- "is" is used at 5th index then again at 20th index so last used at 20th
let car = "car is working car is working" //c-0 a-1 r-2 t-3 space-4 i-5 s-6 space-7 w-8 o-9 r-10 k-11 i-12 n-13 g-14
console.log(car.lastIndexOf("is"))
console.log(car.lastIndexOf("rate")) //if some character doesn't exist, then its index is -1 (case sensitive)

//includes - checks whether that character exists or not
console.log(cart.includes("working")) //true means exist
console.log(cart.includes("works")) //false means doesn't exist