let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let rng = Math.floor(Math.random() * 3);
    let computerChoice;

    if(rng == 0) [
        computerChoice = "rock"
    ]
    else if(rng == 1){
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors"
    }

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {

    humanChoice = String(humanChoice).toLowerCase();
    const gameMessage = document.querySelector("#gameMessage");

    if(humanChoice == "rock") {

        if(computerChoice == "rock") {
            gameMessage.textContent = "Tie! Both Rock";
        }
        else if(computerChoice == "paper") {
            gameMessage.textContent = "You Lose! Paper beats Rock";
            computerScore++;
        }
        else if(computerChoice == "scissors") {
            gameMessage.textContent = "You Win! Rock beats Scissors";
            humanScore++;
        }

    }
    else if(humanChoice == "paper") {

        if(computerChoice == "rock") {
            gameMessage.textContent = "You Win! Paper beats Rock";
            humanScore++;
        }
        else if(computerChoice == "paper") {
            gameMessage.textContent = "Tie! Both Paper";
        }
        else if(computerChoice == "scissors") {
            gameMessage.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        }

    }
    else if(humanChoice == "scissors") {

        if(computerChoice == "rock") {
            gameMessage.textContent = "You Lose! Rock beats Scissors";
            computerScore++;
        }
        else if(computerChoice == "paper") {
            gameMessage.textContent = "You Win! Scissors beats Paper";
            humanScore++;
        }
        else if(computerChoice == "scissors") {
            gameMessage.textContent = "Tie! Both scissors";
        }

    }
    else {
        gameMessage.textContent = "Invalid Move";
    }

    const playerScore = document.querySelector("#playerScore");
    const cpuScore = document.querySelector("#cpuScore");

    playerScore.textContent = "Player: " + humanScore;
    cpuScore.textContent = "CPU: " + computerScore;

    if(humanScore == 5) {
        gameMessage.textContent = "Game Over! Player Wins!";
    }
    else if(computerScore == 5) {
        gameMessage.textContent = "Game Over! Computer Wins!";
    }
}

function playGame() {

    const buttons = document.querySelectorAll("button");
    let humanSelection;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            humanSelection = button.id;
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);

            if(humanScore == 5 || computerScore == 5) {
                buttons.forEach((button) => {
                    button.disabled = true
                });
            }
        });
    });
}

playGame();