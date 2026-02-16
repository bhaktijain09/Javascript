let primarycolors = ['yellow', 'brown', 'red', 'green'];
let secondarycolors = ['violet', 'pink', 'pista', 'crimson'];
console.log(primarycolors);
console.log(secondarycolors);

//Concatenation - 
let colorshade1 = primarycolors.concat(secondarycolors); // prints 'yellow', 'brown', 'red', 'green', 'violet', 'pink', 'pista', 'crimson'
let colorshade2 = secondarycolors.concat(primarycolors); // prints 'violet', 'pink', 'pista', 'crimson', 'yellow', 'brown', 'red', 'green'
console.log(colorshade1);
console.log(colorshade2);

// Reverse - 
console.log(primarycolors.reverse()); // 'green', 'red', 'brown', 'yellow'
console.log(secondarycolors.reverse()); // 'crimson', 'pista', 'pink', 'violet'

// Arrays are mutable - understand the mutating flow
let cars = ['bmw', 'scorpio', 'thar', 'mercedes', 'audi', 'tavera'];
console.log(cars); // prints 'bmw', 'scorpio', 'thar', mercedes', 'audi', 'tavera'
console.log(cars.reverse()); // prints 'tavera', 'audi', 'mercedes', 'thar', 'scorpio', 'bmw'
console.log(cars); // prints 'tavera', 'audi', 'mercedes', 'thar', 'scorpio', 'bmw' // ie cars.reverse is mutate into cars // since arrays are mutable
console.log(cars.reverse()); // prints 'bmw', 'scorpio', 'thar', 'mercedes', 'audi', 'tavera'// since it reverse last array mutated
console.log(cars); // prints 'bmw', 'scorpio', 'thar', 'mercedes', 'audi', 'tavera'