const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScoreCount = 0;
let computerScoreCount = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result  = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "PAPER" && computerChoice === "ROCK" || playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        result = "You win!";
    } else {    
        result = "You lose!";
    }

    playerDisplay.innerHTML = `PLAYER : ${playerChoice}`;
    computerDisplay.innerHTML = `COMPUTER : ${computerChoice}`;
    resultDisplay.innerHTML = result;

    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            computerScoreCount++;
            computerScore.textContent = computerScoreCount;
            break;
        default:
            resultDisplay.classList.remove("greenText");
            resultDisplay.classList.remove("redText");
    }
}