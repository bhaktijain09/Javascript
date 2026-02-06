// In javascript indexing starts from 0 so javascript is a 0 based indexing language 
let names = "TONY STARK";
names[0] //T
names[1] //O
names[2] //N
names[3] //Y
names[4] //space
names[5] //S
names[6] //T
names[7] //A
names[8] //R 
names[9] //K

names.length; //10
typeof names.length; //number (10 is a number)
names[names.length]; //undefined since, names[names.length]; = names[10]; but 10th index for names doesn't exist, for names only 0 to 9 index exist in this case
names[names.length-1]; // names[10-1]; = names[9]; = K
names[names.length-10]; // names[10-10]; = names[0]; = T

let firstName = "Tony";
let lastName = "Stark";
let fullName = firstName + lastName; //output - TonyStark
let full_Name = firstName + " " + lastName; //output - Tony Stark

//string + number
"tony" + 1; //output - tony1

// undefined and null - 
let a; // output - undefined (The value is not assigned  to variable a so undefined)
let b = null; // output - null (The null value is intentional absence of any object value - here for variable b)
