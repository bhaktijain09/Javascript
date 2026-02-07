// 0, -0, false, "" (empty string), null, undefined, NaN always have false values, everything other have true

if(false){  // false will always print else statement
    console.log("Right value");
 }
 else{
      console.log("Wrong value");
 }

 //To check if string is empty or not
let strings = "";  //empty will always print else statement, so put sentence inside console.log() accordingly
if(strings){
    console.log("non empty string");
 }
 else{
      console.log("empty string");
 }

 //Null - // always prints else statements
 if(null){
    console.log("value");
 }
 else{
    console.log("no value");
 }

 //Undefined -
  if(undefined){
    console.log("value defined");
 }
 else{
    console.log("no value so undefined");
 }

//NaN -
if(NaN){
    console.log(" is a number");
 }
 else{
    console.log("not a number");
 }



