// syntax - setTimeOut (Function, timeout);
//R* - timeout is always in ms 

setTimeout( () => {
    console.log("hello there!");
} , 4000);



 console.log("nice!");
 console.log("nice!");
 console.log("nice!"); // prints instantly
setTimeout(() => {
    const a = 10;
    const b = 5;
    const sum = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;
    console.log(sum, sub, mul, div);
} , 2000); // prints after 2s ie 2000ms
 console.log("nice!");
  console.log("nice!");
   console.log("nice!");

//  or 

// function declaration using arrow function
 console.log("yeah!");
 console.log("yeah!");
 console.log("yeah!");// prints instantly
 const operations = (a,b) => {
    const sum = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;
    console.log(sum, sub, mul, div);
 }
//syntax - setTimeOut (Function (paramter1, parameter2), timeout);
setTimeout(operations(20,10) , 2000); // prints after 2s ie 2000ms
console.log("yeah!");
console.log("yeah!");

