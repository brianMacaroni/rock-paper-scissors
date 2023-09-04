//declare array of choices and variable to hold robot choice
const choices = ["rock", "paper", "scissors"];
let compChoice = getComputerChoice();
let userChoice = prompt("Choose rock, paper, or scissors: ");
let userPoints = 0;
let compPoints = 0;

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
    return `Draw. Your choice: ${input}, and computer choice: ${computerSelection}`;
  }

  //compare to see who wins or loses
  switch (input) {
    case "rock":
      if (computerSelection == "scissors") {
        userPoints++;
        return `You win! ${input} beats ${computerSelection}`;
      } else {
        compPoints++;
        return `You lose! ${input} loses to ${computerSelection}`;
      }
    case "paper":
      if (computerSelection == "rock") {
        userPoints++;
        return `You win! ${input} beats ${computerSelection}`;
      } else {
        compPoints++;
        return `You lose! ${input} loses to ${computerSelection}`;
      }
    case "scissors":
      if (computerSelection == "paper") {
        userPoints++;
        return `You win! ${input} beats ${computerSelection}`;
      } else {
        compPoints++;
        return `You lose! ${input} loses to ${computerSelection}`;
      }
  }
}

//game function
function game() {
  let gameEnd = false;
  //loop until user or robot gets 5 points
  while (gameEnd == false) {
    console.log(play(userChoice, compChoice));
    console.log(`User Points: ${userPoints}`);
    console.log(`Computer Points: ${compPoints}`);

    if (userPoints == 5) {
      console.log("You beat the cyborg!");
      return (gameEnd = true);
    } else if (compPoints == 5) {
      console.log("The cyborgs take over the world!");
      return (gameEnd = true);
    }
    userChoice = prompt("Choose rock, paper, or scissors: ");
    compChoice = getComputerChoice();
  }
}

game();
