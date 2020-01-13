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

document.getElementById("rockBtn").addEventListener("click", () => {
    playRound("rock");
});
document.getElementById("paperBtn").addEventListener("click", () => {
    playRound("paper");
});
document.getElementById("scissorsBtn").addEventListener("click", () => {
    playRound("scissors");
});
