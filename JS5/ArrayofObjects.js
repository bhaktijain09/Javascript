// Array of objects refers to objects inside array

// nested objects refers to objects inside objects -
const personArray = [
  {
    name: "aman",
    grade: "A",
    city: "gurgaon",
  },

  {
    name: "bhakti",
    grade: "O",
    city: "Mumbai",
  },

  {
    name: "pushkar",
    grade: "B",
    city: "jaipur",
  },
];

// OPERATIONS ON ARRAY OF OBJECTS

// change city of pushkar from jaipur to pali // UPDATE
// so pushkar's city is in the 2nd array of personArray
personArray[2].city = "pali";
console.log(personArray);
// prints -
// (3) [{…}, {…}, {…}]
// 0: {name: 'aman', grade: 'A', city: 'gurgaon'}
// 1: {name: 'bhakti', grade: 'O', city: 'Mumbai'}
// 2: {name: 'pushkar', grade: 'B', city: 'pali'}
// length: 3
console.log(personArray[2]); // prints {name: 'pushkar', grade: 'B', city: 'pali'} // GET VALUE
console.log(personArray[2].city); // prints pali // GET VALUE
personArray[2].job = "software engineer"; // TO ADD VALUE at 2ND INDEX's object in PersonArray
console.log(personArray[2]); // prints {name: 'pushkar', grade: 'B', city: 'pali', job: 'software engineer'}
console.log(personArray[2].job); // prints software engineer // GET VALUE