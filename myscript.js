//declare array of choices and variable to hold robot choice
const choices = ["rock", "paper", "scissors"];
const compChoice = getComputerChoice();

//function to get random choice from array
function getComputerChoice() {
  let ye = Math.floor(Math.random() * 3);
  return choices[ye];
}
//function to compare user choice and robot choice
function play(playerSelection, computerSelection) {
  //make user input lowercase to easily compare to robot
  const input = playerSelection.toLowerCase();

  //compare to see if there is a draw
  if (input == computerSelection) {
    return console.log(
      `Draw. Your choice: ${input}, and computer choice: ${computerSelection}`
    );
  }

  //compare to see who wins or loses
  switch (input) {
    case "rock":
      if (computerSelection == "scissors") {
        return console.log(`You win! ${input} beats ${computerSelection}`);
      } else {
        return console.log(`You lose! ${input} loses to ${computerSelection}`);
      }
    case "paper":
      if (computerSelection == "rock") {
        return console.log(`You win! ${input} beats ${computerSelection}`);
      } else {
        return console.log(`You lose! ${input} loses to ${computerSelection}`);
      }
    case "scissors":
      if (computerSelection == "paper") {
        return console.log(`You win! ${input} beats ${computerSelection}`);
      } else {
        return console.log(`You lose! ${input} loses to ${computerSelection}`);
      }
  }
}

console.log(play("scissors", compChoice));
console.log(compChoice);
