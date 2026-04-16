// this in arrow functions -
// create an object student
// having properties such as name: "aman", marks: 95, prop: this, a function named getName, an arrow function named getMarks

const student = {
    name: "aman",
    marks: 95,
    prop: this, // global scope

    getName: function () {
        console.log(this); // function - this inside a function whose scope is student
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.marks; // arrow function(parent's scope) - this inside an arrow function is called by a function student whose parent scope is window
    },
    getInfo1: function(){
        setTimeout(() => { // arrow function(parent's scope) - this inside the arrow function is called by setTimeout whose parent function is "function" and its scope is student
        console.log(this);
    }, 2000)
    },
    getInfo2: function(){
        setTimeout(function() { // function - this inside a function is called by setTimeout whose scope is window (since setTimeout is an inbuilt function so its scope is window)
        console.log(this);
    }, 2000)
    },

}


// note - 
// function - self this 
// arrow function - parent's this (lexical scope)(arrow function doesn't have its own this so it uses this of parent function)