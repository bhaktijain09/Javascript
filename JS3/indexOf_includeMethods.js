let marks = ['90', '67', '89', '35'];
console.log(marks.indexOf('35')); // at index 3 so prints 3
console.log(marks.indexOf('55')); // doesn't exists so prints -1
console.log(marks.includes('67')); //67 exists in array so prints true
console.log(marks.includes('66')); // 66 doesn't exists in array so prints false