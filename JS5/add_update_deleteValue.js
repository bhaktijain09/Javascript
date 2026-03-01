// syntax to addEventListener, update, delete key-value properties of objects -
// add --> object.newkey = newvalue; // all by yourself
// update --> object.existingkey = newvalue;  // new value by yourself
// delete --> delete object.existingkey = existingvalue; // delete key-value that you want to delete

let info = {
name: "Bhakti Jain",
age: 21,
rollno: 45,
dob: "9th jan 2005",
marks: [95,92,90,78,89],
grade: "A"
};

// TO ADD GENDER- FEMALE 
info.gender = "female"; 
// prints {name: 'Bhakti Jain', age: 21, rollno: 45, dob: '9th jan 2005', marks: Array(5), …}
// age: 21
// dob: "9th jan 2005"
// gender: "female"               // added new key and value GENDER- FEMALE 
// grade: "A"
// marks: (5) [95, 92, 90, 78, 89]
// name: "Bhakti Jain"
// rollno: 45

// TO UPDATE GRADE TO O INSTEAD OF A
info.grade = "O";
// prints {name: 'Bhakti Jain', age: 21, rollno: 45, dob: '9th jan 2005', marks: Array(5), …}
// age: 21
// dob: "9th jan 2005"
// gender: "female"            
// grade: "O"                   // updated grade from A to O
// marks: (5) [95, 92, 90, 78, 89]
// name: "Bhakti Jain"
// rollno: 45

// DELETE marks key and its value from the object
delete info.marks;
console.log(info);
// prints {name: 'Bhakti Jain', age: 21, rollno: 45, dob: '9th jan 2005', grade: 'O', …}
// age: 21
// dob: "9th jan 2005"
// gender: "female"
// grade: "O"       // deleted marks array
// name: "Bhakti Jain"
// rollno: 45





