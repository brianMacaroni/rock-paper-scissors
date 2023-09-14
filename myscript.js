//declare array of choices and variables
const choices = ["rock", "paper", "scissors"];
let compChoice = getComputerChoice();
let userChoice;
let userPoints = 0;
let compPoints = 0;

//function to get random choice from array
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

let winOrLose;
const userimg = document.createElement("img");
const robotimg = document.createElement("img");
//function to compare user choice and robot choice
function play(playerSelection, computerSelection) {
  userimg.src = `img/${playerSelection}.png`;
  robotimg.src = `img/${computerSelection}.png`;
  document.getElementById("userchoice").appendChild(userimg);
  document.getElementById("robotchoice").appendChild(robotimg);
  //compare to see if there is a draw
  if (playerSelection === computerSelection) {
    return (winOrLose = "draw");
  }

  //compare to see who wins or loses
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "scissors") {
        return (winOrLose = "win");
      } else {
        return (winOrLose = "lose");
      }
    case "paper":
      if (computerSelection == "rock") {
        return (winOrLose = "win");
      } else {
        return (winOrLose = "lose");
      }
    case "scissors":
      if (computerSelection == "paper") {
        return (winOrLose = "win");
      } else {
        return (winOrLose = "lose");
      }
  }
  document.getElementById("userchoice").removeChild(userimg);
  document.getElementById("robotchoice").removeChild(robotimg);
}
let wl;
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
    wl = true;
    console.log("You beat the cyborg!");
    buttonDisableEvent();
    createPlayButton();
    createCongrats();
  } else if (compPoints === 5) {
    wl = false;
    console.log("The cyborgs take over the world!");
    buttonDisableEvent();
    createPlayButton();
    createCongrats();
  }
  console.log("User Points: " + userPoints);
  console.log("Robot Points: " + compPoints);
  compChoice = getComputerChoice();
}

function buttonDisableEvent() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function buttonEnableEvent() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
const winlose = document.querySelector(".winlose");
const congrats = document.createElement("div");

const robotpic = document.getElementById("robotpic");
const robotpic1 = document.getElementById("img2");
const userpic = document.getElementById("userpic");
const userpic1 = document.getElementById("img1");

function createCongrats() {
  const robotpic = document.getElementById("robotpic");
  const robotpic1 = document.getElementById("img2");
  const userpic = document.getElementById("userpic");
  const userpic1 = document.getElementById("img1");
  const newimg = document.createElement("img");
  if (wl === true) {
    congrats.textContent = "You beat the cyborg!";
    newimg.classList.add("content");
    newimg.src = "img/doom_hurt.gif";
    robotpic.removeChild(robotpic1);
    robotpic.appendChild(newimg);
  } else {
    congrats.textContent = "The cyborg take over the world!";
    newimg.classList.add("content");
    newimg.src = "img/doom_hurt.gif";
    userpic.removeChild(userpic1);
    userpic.appendChild(newimg);
  }
  winlose.appendChild(congrats);
}

function createPlayButton() {
  const playbutton = document.createElement("button");
  playbutton.classList.add("playbutton");
  playbutton.textContent = "Play Again";

  const playagain = document.querySelector("#playagain");
  playagain.appendChild(playbutton);

  playbutton.addEventListener("click", () => {
    userPoints = 0;
    compPoints = 0;
    buttonEnableEvent();
    document.getElementById("userscore").textContent =
      "User Score: " + userPoints;
    document.getElementById("robotscore").textContent =
      "Robot Score: " + compPoints;
    playagain.removeChild(playbutton);
    document.getElementById("userchoice").removeChild(userimg);
    document.getElementById("robotchoice").removeChild(robotimg);
    winlose.removeChild(congrats);
    originalImage();
  });
}

const userimg2 = document.createElement("img");
const robotimg2 = document.createElement("img");
function originalImage() {
  userpic.removeChild(userpic.firstElementChild);
  robotpic.removeChild(robotpic.firstElementChild);
  userimg2.src = "img/grin-doomguy.gif";
  userimg2.id = "img1";
  userpic.appendChild(userimg2);
  robotimg2.src = "img/doomguy-robot.gif";
  robotimg2.id = "img2";
  robotpic.appendChild(robotimg2);
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
    game();
  });
  button.addEventListener("mouseover", () => {
    button.setAttribute(
      "style",
      "background-color:black; transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem #ffc600;"
    );
  });
  button.addEventListener("mouseout", () => {
    button.setAttribute("style", "background-color:;");
  });
});
