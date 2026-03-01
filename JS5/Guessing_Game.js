const max = Number(prompt("Enter the max number:"));
let guess = Number(prompt("Enter the guessing number:"));
const random = Math.floor(Math.random() * max) + 1;
while (true) {
  // loop keeps running
  if (guess == "quit") {       // quit doesn't work here, look into it! everything else works
    console.log("you choose to quit the game!");
    break;
  } else if (guess === random) {
    console.log(`The number ${guess} is guessed right!`);
    break; // already guessed, so no need to keep the loop running
  } else {
    if (guess > random) {
      console.log(`The actual number is smaller than your guessed number ${guess}`);
      guess = Number(prompt(`The number ${guess} is not guessed right. Try again! Guess the number again:`));
    } 
    else {
      console.log(`The actual number is greater than your guessed number ${guess}`);
      guess = Number(prompt(`The number ${guess} is not guessed right. Try again! Guess the number again:`));
    }
  }
}
