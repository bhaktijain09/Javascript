// IMP QUESTION - Declare any fav movie and ask user to guess that movie. if guessed then "congratulations" else guess again
// using while loop

// 3 cases - 
// correct movie guess, congratulations
// "not correct" movie guess and also "not quit", try again!
// quit the game
 


let favMovie = "Gunjan Saxena";
let guess = prompt("Enter the movie name to guess:");
while((guess.toLowerCase() != favMovie.toLowerCase()) && (guess.toLowerCase() != "quit")){ // T && T = T // to quit the game, you need to enter quit in guess prompt
    guess = prompt("Wrong guess! Try guessing again:"); // logic for not correct movie and not to quit
} 
// converted into .toLowerCase() beacuse while entering guess, we don't want wrong guess beacuse of capital or small letter difference, 
// so even when user guess movie in capital letters, it converts it into small letter then also convert already declared favMovie in lowercase and compares both. 
// so only value is compared and not its small or capital letter format 
if(guess.toLowerCase() == favMovie.toLowerCase()){ 
console.log("Congratulations! You guessed the right fav movie"); // if correct fav movie
}
else{
    console.log("you quit the game"); // if quit the game
}
