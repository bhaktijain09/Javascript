// object Literals - used to store keyed collections and complex entities 
// Properties = (key, value)

// eg-
// key      value
// name     Bhakti
// marks    95
// rollno.  45

// Objects are collection of properties

// syntax of object literals - 
// datatype variable = {
//     key: value,
//       key: value,
//         key: value,
// };

let student = {
    name: "Bhakti",
    age: 21,
    marks: 95,
    rollno: 45,
    city: "Mumbai"
};
console.log(student);
// prints {name: 'Bhakti', age: 21, marks: 95, rollno: 45, city: 'Mumbai'}



// Arrays vs Objects - 

// Both arrays and objects stores value.
// but arrays store only "values" whereas objects store "keys with values"

// arrays                        objects

// value                         key: value
// let,var,const                 generalyy const is used
//  -                            can store array within object

// eg -
let array1 = ["Bhakti", 21, 95, 45];  // array
// arrays are displayed in the same order as written  

const object1 = {                    // object
    name: "Bhakti",
    age: 21,
    marks: 95,
    rollno: 45,
    city: ["Bhusawal", "Mumbai"]
}; // objects are displayed in the any order, may not be in the same order as written  

console.log(array1);
// prints - (4) ['Bhakti', 21, 95, 45]
console.log(object1);
// prints - {name: 'Bhakti', age: 21, marks: 95, rollno: 45, city: Array(2)}
// on expanding object1 we get - 
// age: 21
// city: (2) ['Bhusawal', 'Mumbai']
// marks: 95
// name: "Bhakti"
// rollno: 45