const students = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// javascript converts key to string first
console.log(students[1]); // students[1] is students[1] (string) is students[key 1 ] = a (value)
// console.log(students.1); // prints Syntax error: unexpected number because number doesn't convert to string in object.key(dot operator)
console.log(students[2]); // students[2] is students[2] (string) is students[key 2 ] = b (value)
// console.log(students.2); // prints Syntax error: unexpected number because number doesn't convert to string in object.key(dot operator)
console.log(students[true]); // students[true] is students[true] (string) is students[key true ] = c (value)
console.log(students.true); // prints c
console.log(students[null]); // students[null] is students[null] (string) is students[key null ] = d (value)
console.log(students.null); // prints d
console.log(students[undefined]); // students[undefined] is students[undefined] (string) is students[key undefined ] = e (value)
console.log(students.undefined); // prints e

// ie console.log(students[1]);  first means object[key in string] and not object[index No.] // priority