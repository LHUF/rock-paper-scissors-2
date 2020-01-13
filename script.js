let result;
let computerScore = 0;
let humanScore = 0;
let roundCount = 0;

function computerPlay() {
    randomNum = Math.floor(Math.random() * 3) + 1;  

    if (randomNum == 1) {
        return "rock";
    } else if (randomNum == 2) {
        return "paper";
    }   return "scissors";
}

function playRound(humanChoice, computerChoice) {
    computerChoice = computerPlay();

    roundCount++;
    
    if (humanChoice == computerChoice) result = "draw";

    else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper"
    && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        result = "Player Win";
        humanScore++;
    } else if (result = "Computer Win") computerScore++;
    

}

function showResults() {
    const roundScore = document.createElement("h2")
    roundScore.classList.add("roundScore");

    if (result == "draw") roundScore.textContent = `Round ${roundCount} was a draw.`;
    if (result == "Computer Win") roundScore.textContent = `The computer won round ${roundCount}.`;
    if (result == "Player Win") roundScore.textContent = `You won round ${roundCount}.`

    document.querySelector("#results").appendChild(roundScore);
}

document.getElementById("rockBtn").addEventListener("click", () => {
    playRound("rock");
    showResults();
});
document.getElementById("paperBtn").addEventListener("click", () => {
    playRound("paper");
    showResults();
});
document.getElementById("scissorsBtn").addEventListener("click", () => {
    playRound("scissors");
    showResults();
});

//find a way to show who played what in each game
//limit game to 5 rounds
//show result after 5 rounds of who won overall
//ask to play again
//use loop for button listeners