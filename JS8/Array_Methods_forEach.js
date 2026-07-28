// forEach() - Perform an action for each element
let arr = [1, 2, 3, 4, 5];
let ans = val => {
  console.log(val + "hello");
};
//.forEach -
arr.forEach(ans);

// OR

let answer = arr.forEach((val) => {
   console.log(val + " hello");
});
console.log(answer);



//objects in array - 
let array = [
    {
Name: "Bhakti",
Age: 21
    },
    {
Name: "Jay",
Age: 19
    },
    {
Name: "Chetna",
Age: 28
    }
];

// every element in the object in the array is student
let ans2 = student => {
    console.log(student); //element
    console.log(student.Name); //element.property
    console.log(student.Age); //element.property
}
array.forEach(ans2);

//OR 
let ans3 = array.forEach((student) => {
    console.log(student); //element
    console.log(student.Name); //element.property
    console.log(student.Age); //element.property
});

