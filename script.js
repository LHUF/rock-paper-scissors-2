let result;
let humanChoice;

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
    
    if (humanChoice == computerChoice) result = "draw";

    else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper"
    && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        result = "Player Win";
    } else result = "Computer Win";

}




(playRound("rock"));
console.log(result);