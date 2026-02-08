// create a system to calculate popcorn prices based on the size customer asks for: 
// XL = Rs 250, L = Rs 200, M = Rs 100, S = Rs 50
let size = "S";
if(size === "XL"){
    console.log(`Your pay amount is ${250}`);
}
else if(size === "L"){
 console.log(`Your pay amount is ${200}`);
}
else if (size === "M"){
 console.log(`Your pay amount is ${100}`);
}
else{
 console.log(`Your pay amount is ${50}`); // S in else part
}

// A good string is a string which starts with letter 'a' and has length > 3 , Write a program to find if a string is good or not? 
let arrayname = "antique";
if(arrayname[0] === "a"){
    if (arrayname.length>3)
    {
        console.log("Array is good");
    }
    else{
         console.log("Array starts with 'a' but length is not greater than 3");
    }
}
else{
 console.log("Array is not good");
}

//OR 
let nameofarray = "antique";
if(nameofarray[0] === "a" && nameofarray.length>3){
    console.log("Array is good");
}
else{
   console.log("Array is not good"); 
}

// give the output of the code - 
let num = 12;
if((num%3==0) && ((num+1 == 15) || (num-1 == 11))){ 
    console.log("safe");
}
else{
    console.log("unsafe");
}
 //solving the bracket first - 
 // ((num+1 == 15) ie 12+1=13 not equal to 15 so false || (num-1 == 11) ie 12-1= 11 is true) (false || true = true)
 // (num%3==0) = (12%3==0) ==> true
 // (true && true) = true 
 // so print if condition statement ie safe.

 // using switch statement, print day of the week using number variable 'day' with value 1 to 7

 let day = 5;

 switch(day){
    case 1: 
    console.log("Monday");
    break;
    case 2: 
    console.log("Tuesday");
    break;
    case 3: 
    console.log("Wednesday");
    break;
    case 4: 
    console.log("Thursday");
    break;
    case 5: 
    console.log("Friday");
    break;
    case 6: 
    console.log("Saturday");
    break;
    case 7: 
    console.log("Sunday");
    break;
    default:
    console.log("Calendar is missing!");
 }

 // Create a variable num with some value, now print "good" if it is divisible by 10 and "bad" if it is not.
 let number1 = 21;
 if(number1%10 === 0){
    console.log("good");
 }
else{
    console.log("bad");
}

//take name and age as user's input, then return back alert to the user using statement name is age years old.
let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
alert(`${name} is ${age} years old.`);

// use switch statement to print the months in quarter: use number as quarter value.
// quarter 1 : January, February, March 
// quarter 2 : April, May, June 
// quarter 3 : July, August, September 
// quarter 4 : October, November, December
let quarter = 3;
switch(quarter){
    case 1 : 
    console.log("January, February, March");
    break;
     case 2 : 
    console.log("April, May, June ");
    break;
     case 3 : 
    console.log("July, August, September ");
    break;
     case 4 : 
    console.log("October, November, December");
    break;
    default:
    console.log("Not a quarter!");
}

// A string is a golden string if it starts with 'a' or 'A' and has length greater than 5. 
// For a given string, print if it is golden or not?
let string = "Apples";
if((string[0] === 'a' || string[0] === 'A') && string.length>5){
    console.log("golden string");
}
else{
    console.log("Not a golden string");
}

// WAP to find largest of 3 numbers
let a = 20;
let b = 30;
let c = 10;
if(a>b){
    if(a>c){
        console.log("largest number is " + a);
    }
    else{
         console.log("largest number is " + c);
    }
}
else{
     if(b>c){
        console.log("largest number is " + b);
    }
    else{
         console.log("largest number is " + c);
    }
}

// Write a program to check if 2 numbers have the same last digit. Eg: 32 and 47852 have the same last digit i.e. 2
let num1 = 723870;
let num2 = 298972;
// we know lastdigit = num%10
if(num1%10 === num2%10){
    console.log("Both numbers have same last digit which is " + num1%10);
}
else{
   console.log("Both numbers don't have same last digit"); 
}