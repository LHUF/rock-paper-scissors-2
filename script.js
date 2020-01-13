let result;

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
    
    if (humanChoice == computerChoice) return result = "draw";

    else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper"
    && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        return result = "Player Win";
    } else return result = "Computer Win";

}

function showResults() {
    const roundScore = document.createElement("h2")
    roundScore.classList.add("roundScore");

    if (result == "draw") roundScore.textContent = "This Round was a draw";
    if (result == "Computer Win") roundScore.textContent = "The computer won this round";
    if (result == "Player Win") roundScore.textContent = "You won this round"

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


