const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };


var playerSel;
var computerSel;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
var fin = document.querySelector("#Fin")
var refr = document.querySelector("#refr")

rock.addEventListener ("click", Rockification);
paper.addEventListener ("click", Paperification);
scissors.addEventListener ("click", Scissorsification);

computerSel = getComputerChoice();

function Rockification() {
    playerSel = "rock"
    Game(playerSel, computerSel);
};

function Paperification() {
    playerSel = "paper"
    Game(playerSel, computerSel);
};

function Scissorsification() {
    playerSel = "scissors"
    Game(playerSel, computerSel);
};

function Game(a, b) {
    if (a == "rock" && b == "rock") {
        fin.textContent = `${a} vs ${b}! Its a Tie!`
    } else if (a == "paper" && b == "paper") {
        fin.textContent = `${a} vs ${b}! Its a Tie!`
    } else if (a == "scissors" && b == "scissors") {
        fin.textContent = `${a} vs ${b}! Its a Tie!`
    } else if (a == "rock" && b == "paper") {
        fin.textContent = `${a} vs ${b}! You Lose, try again.`
    } else if (a == "rock" && b == "scissors") {
        fin.textContent = `${a} vs ${b}! You win!`
    } else if (a == "paper" && b == "rock") {
        fin.textContent = `${a} vs ${b}! You win!`
    } else if (a == "paper" && b == "scissors") {
        fin.textContent = `${a} vs ${b}! You Lose, try again.`
    } else if (a == "scissors" && b == "rock") {
        fin.textContent = `${a} vs ${b}! You Lose, try again`
    } else if (a == "scissors" && b == "paper") {
        fin.textContent = `${a} vs ${b}! You win!`
    } else {
        fin.textContent = "Something went wrong"
    };
    refr.textContent = "To play again, refresh the page!"
    console.log(a)
    console.log(b)
};