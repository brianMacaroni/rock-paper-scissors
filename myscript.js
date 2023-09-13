//declare array of choices and variables
const choices = ["rock", "paper", "scissors"];
let compChoice = getComputerChoice();
let userChoice;
let userPoints = 0;
let compPoints = 0;

//function to get random choice from array
function getComputerChoice() {
  let ye = Math.floor(Math.random() * 3);
  return choices[ye];
}

let winOrLose;
//function to compare user choice and robot choice
function play(playerSelection, computerSelection) {
  document.getElementById("userchoice").textContent = playerSelection;
  document.getElementById("robotchoice").textContent = computerSelection;
  //compare to see if there is a draw
  if (playerSelection === computerSelection) {
    return (winOrLose = "draw");
  }

  //compare to see who wins or loses
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "scissors") {
        winOrLose = "win";
        break;
      } else {
        winOrLose = "lose";
        break;
      }
    case "paper":
      if (computerSelection == "rock") {
        winOrLose = "win";
        break;
      } else {
        winOrLose = "lose";
        break;
      }
    case "scissors":
      if (computerSelection == "paper") {
        winOrLose = "win";
        break;
      } else {
        winOrLose = "lose";
        break;
      }
  }
  return winOrLose;
}
let gameEnd;
//game function
function game() {
  //loop until user or robot gets 5 points
  if (winOrLose === "win") {
    console.log(`You win! ${userChoice} beats ${compChoice}`);
    userPoints++;
    document.getElementById("userscore").textContent =
      "User Score: " + userPoints;
  } else if (winOrLose === "lose") {
    console.log(`You lose! ${userChoice} loses to ${compChoice}`);
    compPoints++;
    document.getElementById("robotscore").textContent =
      "Robot Score: " + compPoints;
  } else {
    console.log(
      `You draw! Your Choice: ${userChoice}, Robot Choice: ${compChoice}`
    );
  }

  if (userPoints === 5) {
    console.log("You beat the cyborg!");
    return (gameEnd = true);
  } else if (compPoints === 5) {
    console.log("The cyborgs take over the world!");
    return (gameEnd = true);
  }
  console.log("User Points: " + userPoints);
  console.log("Robot Points: " + compPoints);
  compChoice = getComputerChoice();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (button.id == "rock") {
      userChoice = "rock";
    }
    if (button.id == "paper") {
      userChoice = "paper";
    }
    if (button.id == "scissors") {
      userChoice = "scissors";
    }
    play(userChoice, compChoice);
    console.log(userChoice);
    console.log(compChoice);
    console.log(winOrLose);
    game();
  });
});

const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "color: blue; background: pink; border-color: black; border-style: solid;"
);
