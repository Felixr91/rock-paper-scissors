//create an array that will hold the values for rock paper scissors
let outcomes = [
  "rock",
  "paper",
  "scissors"
]

var rockButton = document.querySelector(".rock");
var paperButton = document.querySelector(".paper");
var scissorsButton = document.querySelector(".scissors");


rockButton.addEventListener("click", function () {
  let playerChoice = "rock";
  let compChoice = outcomes[Math.floor((Math.random() * 3))];
  if (compChoice == "paper") {
    alert("Computer chooses 'paper.' You lose!");
  } else if (compChoice == "scissors") {
    alert("Computer chooses 'scissors.' You win!");
  } else {
    alert("Computer chooses 'rock.' Tie!")
  }
})

paperButton.addEventListener("click", function () {
  let playerChoice = "paper";
  let compChoice = outcomes[Math.floor((Math.random() * 3))];
  if (compChoice == "scissors") {
    alert("Computer chooses 'scissors.' You lose!");
  } else if (compChoice == "rock") {
    alert("Computer chooses 'rock.' You win!");
  } else {
    alert("Computer chooses 'paper.' Tie!")
  }
})

scissorsButton.addEventListener("click", function () {
  let playerChoice = "scissors";
  let compChoice = outcomes[Math.floor((Math.random() * 3))];
  if (compChoice == "rock") {
    alert("Computer chooses 'rock.' You lose!");
  } else if (compChoice == "paper") {
    alert("Computer chooses 'paper.' You win!");
  } else {
    alert("Computer chooses 'scissors.' Tie!")
  }
})

