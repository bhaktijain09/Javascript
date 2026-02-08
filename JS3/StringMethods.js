// Methods - actions that can be performed on objects 

// method 1 - console.log(); 
console.log(); // log is method to print statements on console

// method 2 - StringName.trim();
let msg = "  Hello  ";
console.log(msg.trim());   // trim is the method applied on msg variable which removes extra initial and last spaces from its value "  Hello  " and prints "Hello"
let msg2 = "  He  llo  ";
console.log(msg.trim());   // (does not trim spaces from in between of value, only initial and last spces)(prints "He  llo")


//use case - user inputs password with spaces, not allowed so use trim.
let password = prompt("Enter your password: "); // password with spaces saved in password variable eg - "   jhsdgh   "
let newpassword = password.trim(); // trimmed spaces from password gives new string and saved in (new variable) newpassword // trimmed - "jhsdgh"
console.log(newpassword); // prints password without spaces ie newpassword // prints - "jhsdgh"

// method 3 - .toUpperCase(); and .toLowerCase();
let address = "Surbhi Nagar";
let format1 = address.toUpperCase(); 
let format2 = address.toLowerCase();
console.log(format1); //SURBHI NAGAR
console.log(format2); //surbhi nagar

// method 4 - StringName.indexOf(arg); , StringName.lastIndexOf(arg); // arg is the argument passed to search index number
let label = "Ashirwad aata";
let label1 = label.indexOf("aata");
console.log(label1); // gives 9 since aata starts at index 9
let label2 = label.indexOf("Ashirwad");
console.log(label2); // gives 0 since Ashirwad starts at index 0
let label3 = label.indexOf(" ");
console.log(label3); // gives 8 since space starts at index 8 between Ashirwad and aata
let label4 = label.indexOf("shirwad");
console.log(label4); // gives 1 since shirwad starts at index 1
let label5 = label.indexOf("Shirwad");
console.log(label5); // gives -1 since Shirwad doesn't exist
let label6 = label.indexOf("a"); // multiple a's but a first occured at index 6
console.log(label6); // gives 9 since aata starts at index 6
let label7 = label.lastIndexOf("a");  // multiple a's but a last occured at index 12  // .lastIndexOf(arg); 
console.log(label7); // gives 9 since aata starts at index 12

// method 5 - Method Chaining 
// To apply multiple methods on single String, we can use method chaining 
// eg - To apply trim and uppercase on a string 

// use -
let sentence = "Hi I am Bhakti";
let save1 = sentence.trim().toUpperCase();
console.log(save1);

// instead of - 
// let sentence = "Hi I am Bhakti";
// let save1 = sentence.trim();
// let save2 = save1.toUpperCase();
// console.log(save2);

// method 6 - 
// StringName.slice(startindex, lastindex);    //(returns a part of original string as new string)
// StringName.slice(startindex);    //prints from index specified till completion of string since there is no last limit specified
// StringName.slice(-num);    // prints (length-num) ie (length-num) last num digits of length specified
let stringname = "You are capable and has potential";
let newstring = stringname.slice(8,15); //prints from index 8 to index 15 "capable"
console.log(newstring); 
let newstring1 = stringname.slice(4); //prints from index 4 till completion of string since there is no last limit "capable and has potential"
console.log(newstring1); 
let newstring2 = stringname.slice(-2); // stringname.slice(-2); =>  stringname.slice(-num); =>  stringname.slice(length-num); ie prints(length-num) last num digits of length specified
console.log(newstring2);  // if (-2) then last 2 digits ie al  
let newstring3 = stringname.slice(-13); // stringname.slice(-13); =>  stringname.slice(-num); =>  stringname.slice(length-num); ie prints(length-num) last num digits of length specified
console.log(newstring3);  // if (-13) then last 13 digits ie has potential 

//method 7 - .replace(), .repeat()

// .replace();
// case1 -
let feel = "IloveCoding";
let feel1 = feel.replace("love", "do"); //replaces word1 with word2
console.log(feel1); // gives IdoCoding
// case2 - 
let feel2 = "IloveCodingCoding";
let feel3 = feel2.replace("Coding", "Travel"); //replaces 1st occurence of word1(Coding) with word2(Travel), not the 2nd occurence of word1 is replaced
console.log(feel3); // gives IdoTravelCoding

// .repeat();
let fruit = "mango";
let fruit1 = fruit.repeat(2);
console.log(fruit1); // gives mangomango



