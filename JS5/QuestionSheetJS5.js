// Qs1. Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].
let dicenumber = Math.floor(Math.random()*6) + 1;
console.log(dicenumber);

// Qs2. Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.
const car = {
name: "bmw",
model: "pro",
color: "black"
};
console.log(car.name);

// Qs3. Create an object Person with their name, age and city. Edit their city’s original value to change it to “NewYork”.
// Add a new property country and set it to the United States
const Person = {
    name: "Bhakti",
    age: 21,
    city: "Mumbai"
};

Person.city = "NewYork"; // Edit their city’s original value to change it to “NewYork”
Person.country = "United States"; // Add a new property country and set it to the United States
console.log(Person);
