// ask the user what they want to do - req using prompt

// let list = []; – Creates an empty array to store tasks.
// while(true) { ... } – Keeps the program running until the user quits.
// let req = prompt(...) – Asks the user which operation to perform each loop.
// if(req === "quit") { break; } – Stops the program if the user chooses to quit.
// else if(req === "add") { list.push(task); } – Adds a new task to the list.
// else if(req === "delete") { list.splice(index,1); } – Removes a task if it exists.
// else if(req === "list") { for(...) console.log(...) } – Displays all tasks with their indexes.
// else { console.log("Invalid operation"); } – Warns the user about invalid input.

let list = [];
while(true){ // gives continuous loop always running

let req = prompt("Enter the operation you want to do: Enter add, delete, list or quit"); // this req can be add, delete, list, quit

if(req === "quit"){
    console.log("You have opted for quit option");
    break;
}

else if (req === "add"){
    let add = prompt("Enter the task you want to add");
    list.push(add); // task added to existing array
    console.log(add + " task is added!");
}

else if (req === "delete"){
    let item = prompt("enter the task you want to delete/remove:"); // takes name of item from user
    let indexNo = list.indexOf(item); // finds index of that item from list array and saves it in "index" variable

    if(indexNo != -1){ // indexNo = -1 , item does not exist condition // indexNo != -1 , item exist in array condition
    list.splice(indexNo,1); // deleting item from that particular indexNo for count 1 ie the item itself
    console.log(item + " is removed from to-do list");
    }
}

else if (req === "list"){
    for(let i=0; i<list.length; i++){
    console.log(i + ". "+ list[i]); // prints like (i. item) ie (1. item1, 2. item2, ....)
    }
}

else {
     console.log("Invalid operation");  // condition when req === invalid input // not add, delete, list, quit
    } // Warns the user about invalid input.

}