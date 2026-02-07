// Arithmetic operators => +, -, *, /, %, **
let a = 10;
let b = 20;
console.log(a+b, a-b, a*b, a/b, a%b); // output => 30 -10 200 0.5 10

// Unary operators => ++, --
console.log(a++, ++a, a--, --a);  // output => 10 12 12 10

// Assignment operators => +=, -=, *=, /=, %=
a += b; // a = a + b; //a = 10 + 20 = 30
console.log(a);

// Comparison Operators => >, >=, <, <=, ==, !=
console.log(a>b, a<b, a>=b, a<=b, a==b, a!=b); // returns true or false according to condition
// == compares value not type and === compares value and its type as well
// eg- 
let n = 5;
let str = '5';
console.log(typeof n); // number 
console.log(typeof str); // string
console.log(n == str); // returns true since it compares 5 of number n with 5 of string value str, so 5==5 => true
console.log(n === str); // returns false since it compares 5 of number n with 5 of string value str, so 5==5 => true but type (number != string) so false 
//  (== compares value) and (=== compares value and type) 
// eg - 
console.log(0==false); // returns true since (1 is true, 0 is false so value check)
console.log(0==false); // returns false since (1 is true, 0 is false so value check is correct but type is num != boolean so false)

// Non-numbers comparison based on unicorn values -
// 'a'= 61, 'b'= 62, ... (every character has a unicode assigned to it so when we compare non-numbers we compare its unicode)
// 'A'= 41, 'B'= 42, ... 
console.log('a' > 'b'); //false
console.log('A' < 'B'); //true
console.log('*' > '&'); //true

// Logical operators => &&, ||, ! (AND, OR, NOT) -

// AND - true && true = true others false
console.log(`The ans is : ${(5>3) && (6<12)}`); // t && t = t
// OR - false || false = false others true
console.log(`The ans is : ${(5<3) && (6>12)}`); // f || f = f
// NOT - !true = false , !false = true
console.log(!(5>9)); //5>9 is false but its not(!) is true, so ans is true
console.log(!(5<9)); //5<9 is true but its not(!) is false, so ans is false
