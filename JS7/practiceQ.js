// write an arrow function that returns the square of a number "n" -
const arrow = (n) => n*n; // const function = (arg) => {value};
console.log(arrow(3)); // output prints 9

// write a function that prints "hello world!" 5 times at interval of 2s each
// setInterval( ()=> {console.log("hello world!")} , 2000); 
// but how do you stop this from running infinitely -
// setInterval - repeats action after time specified (repeats action)
// setTimeout - takes action time specified (takes action only once)

// hello world repeats after 2s each time and we need it to print 5 times, so stop when hello world is printed 5 times
// 2000 ms * 5 times = 10000 ms (clearInterval after 10000 ms) 
const message = setInterval( () => {console.log("hello world!")} , 2000);
setTimeout(() => {
    clearInterval(message);
    console.log("cleared Interval");
},12000);

// output prints -
// hello world! - at 2000
// hello world! - at 4000
// hello world! - at 6000
// hello world! - at 8000
// hello world! - at 10000
// cleared Interval - at exactly 10000 immediately executes even before hello world! - at 10000 
// so we keep clearInterval at 12000 so that hello world! - at 10000 is first executed and then clearInterval is implemented