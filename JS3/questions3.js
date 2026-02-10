// Q. let msg = "help!", trim it and convert it into uppercase. 
let helpmsg = "help!";
let helpmsg1 = helpmsg.trim().toUpperCase();
console.log(helpmsg1);

// predict output - 
let naming = "ApnaCollege";
let name1 = naming.slice(4,9);  //" Colle"
let name2 = naming.indexOf("na"); //2  //for na, n starts at 2
let name3 = naming.replace("Apna", "Our"); //"OurCollege"

//seperate the college part in above string and replace 'l' with 't'
let name4 = naming.slice(4,11); // gives College
let name5 = name4.replace("l", "t"); // gives Cotlege (replaces only first occurence of l with t)
let name6 = name5.replace("l", "t"); // gives Cottege (replaces 2nd occurence of l with t)
console.log(name6);
// or 
let name7 = naming.slice(4).replace("l","t").replace("l","t"); 
console.log(name7);
