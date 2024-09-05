function titleCase(word) {
    let resultWord = (word[0].toUpperCase()) + ((word.slice(1, word.length).toLowerCase()));
    return resultWord;
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    let choice;
    switch(randomNumber) {
        case 0:
            choice = "rock";
            break;
        case 1: 
        choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    console.log(`Computer choice: ${choice}`);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Write your choice.").toLowerCase();
    console.log(`Choice: ${choice}`);
    return choice;
}

function playRound(humanChoice, computerChoice) {

    let humanWin = undefined;
    let draw = false;
    switch(humanChoice) {
        case "rock":
            if(computerChoice == "paper") {
                humanWin = false;
            }
            else if(computerChoice == "scissors") {
                humanWin = true;
            }
            else if(computerChoice == "rock") {
                draw = true;
            }
            break;
        case "paper":
            if(computerChoice == "rock") {
                humanWin = true;
            }
            else if(computerChoice == "scissors") {
                humanWin = false;
            }
            else if(computerChoice == "paper") {
                draw = true;
            }
            break;
        case "scissors":
            if(computerChoice == "rock") {
                humanWin = false;
            }
            else if(computerChoice == "paper") {
                humanWin = true;
            }
            else if(computerChoice == "scissors") {
                draw = true;
            }
            break;
    }

    if(humanWin == true) {
        console.log(`You win! ${titleCase(humanChoice)} beats ${titleCase(computerChoice)}`);
        return 0;
    }
    else if (humanWin == false && draw == false){
        console.log(`You lose! ${titleCase(computerChoice)} beats ${titleCase(humanChoice)}`);
        return 1;
    }
    else if(draw == true) { 
        console.log("It's a draw!");
        return 2;
    }

}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    for(let i = 0 ; i < 5 ; i++) {
        console.log(`<<< ROUND ${i + 1} >>>`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        if(result == 0) {
        humanScore++;
        }
        else if (result == 1) {
        computerScore++;
        }
    }

    console.log(`<<< FINAL SCORE >>>\nComputer: ${computerScore}\nYou: ${humanScore}`)
}

playGame();