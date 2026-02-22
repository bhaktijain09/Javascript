// print number from 1 to 5 until you encounter 3

let k=1;
while(k<=5){
    if(k == 3){
        console.log(" k is 3 so break the loop");
        break;
    }
    console.log(k);
    k++;
}

// print number from 1 to 5 backwards until you encounter 3

let l=5;
while(l>=1){
    if(l == 3){
        console.log(" l is 3 so break the loop");
        break;
    }
    console.log(l);
    l--;
}

// IMP QUESTION - if you guess the predefined movie right then congratulations! else try again and if you quit then break the (loop) game!

// 3 cases -
// if guessmovie!= movie then 2 cases - either quit game or try again, 
// if we put quit first then try again will not be asked(right approach) and the system quits, 
// if we put try again first and then quit, then system keeps asking try again until it gets movie name and quit is never executed
// so first quit logic then try-again logic
let movie = "Vivah";
let guessmovie = prompt("Guess the movie:");
while(movie.toLowerCase() != guessmovie.toLowerCase()){

    if(guessmovie.toLowerCase() === "quit"){  // condition for quit  // if yes then loop breaks
        console.log("you opted to quit the game!");
        break;
    }
     guessmovie = prompt("Wrong! Try again:"); // try movie name again
}

if(movie.toLowerCase() == guessmovie.toLowerCase()){
  console.log("Congratulations! you guessed the right movie");
}