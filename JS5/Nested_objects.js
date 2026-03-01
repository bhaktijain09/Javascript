// nested objects refers to objects inside objects -
const person = {

  aman: {
    grade: "A",
    city: "gurgaon",
  },

  bhakti: {
    grade: "O",
    city: "Mumbai",
  },

  pushkar: {
    grade: "B",
    city: "jaipur",
  }

};

// OPERATIONS ON NESTED OBJECTS

// change city of pushkar from jaipur to udaipur // UPDATE
person.pushkar.city = "udaipur";
console.log(person);
// prints -
// {aman: {…}, bhakti: {…}, pushkar: {…}}
// aman: {grade: 'A', city: 'gurgaon'}
// bhakti: {grade: 'O', city: 'Mumbai'}
// pushkar: {grade: 'B', city: 'udaipur'} // changed city from jaipur to udaipur
console.log(person.pushkar); // prints {grade: 'B', city: 'udaipur'} // GET VALUE
