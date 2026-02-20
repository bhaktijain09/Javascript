// To print only even numbers from 0 to 10 
for (let i=0; i<=10; i+=2){ // i+=2 is i=i+2
    console.log(i); // starting (initialization value is imp) with 0(first even number in range) and +2 after every iteration gives even number
}
// output -
// 0
// 2
// 4
// 6
// 8
// 10

// To print only even numbers from 10 to 0 (backwards)
for (let i=10; i>=0; i-=2){ // i-=2 is i=i-2
    console.log(i); // starting (initialization value is imp) with 10(last even number in range) and -2 after every iteration gives even number backwards
}
// output -
// 10
// 8
// 6
// 4
// 2
// 0