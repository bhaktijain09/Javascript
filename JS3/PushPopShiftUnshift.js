//Array Methods - push(adds at end), pop(removes from end), shift(removes from start), unshift(adds at start)
let students = ['Yashica', 'Bhakti', 'Samantha', 'Anusha'];
// push -
students.push('Apurva'); // push adds element to the last index of array
console.log(students); //  // prints 'Yashica'', 'Bhakti, 'Samantha', 'Anusha', 'Apurva'
// pop - 
students.pop();
console.log(students); // prints 'Yashica', 'Bhakti, 'Samantha', 'Anusha' ie pops last index element
// shift -
students.shift();
console.log(students); //removes 0th index element and prints 'Bhakti', 'Samantha', 'Anusha' ie pops initial 0th index element
// unshift -
students.unshift('Pushkar');
console.log(students); // prints 'Pushkar', 'Bhakti', 'Samantha', 'Anusha' ie push at 0th index element

