const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const PlayerScoreDisplay = document.getElementById("PlayerScoreDisplay")
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay")
let playerScore = 0;
let ComputerScore = 0;
const Finalresult = document.getElementById("Finalresult");
function playGame(playerchoice){
    const computerChoice = choices[Math.floor(Math.random() *3)];
    // console.log(computerChoice)
    let result = "";
    if(playerchoice === computerChoice){
        result = `It's a Tie`;
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU Win" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU Win" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU Win" : "YOU LOSE";
                break;
            }
        }

        playerDisplay.textContent = `PLAYER: ${playerchoice}`
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greenText", "redText")

        switch(result){
            case "YOU Win":
                resultDisplay.classList.add("greenText");
                playerScore++;
                PlayerScoreDisplay.textContent = playerScore;
                break;
            case "YOU LOSE":
                resultDisplay.classList.add("redText");
                ComputerScore++;
                ComputerScoreDisplay.textContent = ComputerScore;
                break;

            }

}
    

