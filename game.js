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

function getHumanChoice() {

    const humanChoice = prompt("Lets play Rock Paper Scissors!\nWhat's your move?");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    humanChoice = String(humanChoice).toLowerCase();

    if(humanChoice == "rock") {

        if(computerChoice == "rock") {
            console.log("Tie! Both Rock")
        }
        else if(computerChoice == "paper") {
            console.log("You Lose! Paper beats Rock")
            computerScore++;
        }
        else if(computerChoice == "scissors") {
            console.log("You Win! Rock beats Scissors")
            humanScore++;
        }

    }
    else if(humanChoice == "paper") {

        if(computerChoice == "rock") {
            console.log("You Win! Paper beats Rock")
            humanScore++;
        }
        else if(computerChoice == "paper") {
            console.log("Tie! Both Paper")
        }
        else if(computerChoice == "scissors") {
            console.log("You Lose! Scissors beats Paper")
            computerScore++;
        }

    }
    else if(humanChoice == "scissors") {

        if(computerChoice == "rock") {
            console.log("You Lose! Rock beats Scissors")
            computerScore++;
        }
        else if(computerChoice == "paper") {
            console.log("You Win! Scissors beats Paper")
            humanScore++;
        }
        else if(computerChoice == "scissors") {
            console.log("Tie! Both scissors")
        }

    }
    else {
        console.log("Invalid Move")
    }

    console.log("Player: " + humanScore);
    console.log("CPU: " + computerScore);
}

function playGame() {

    const buttons = document.querySelectorAll("button");
    let humanSelection;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            
            humanSelection = button.id;
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);
        });
    });
}

playGame();