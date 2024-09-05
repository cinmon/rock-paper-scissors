let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

function getHumanChoice() {
    /*
    * 1: rock
    * 2: paper
    * 3: scissors
    */ 
    const rock_button = document.getElementById("rock");
    const paper_button = document.getElementById("paper");
    const scissor_button = document.getElementById("scissor");

    document.querySelector(".computer-action").textContent = " ";
    document.querySelector(".result").textContent = " ";

    rock_button.addEventListener("click", () => {
        playRound(1);
    });

    paper_button.addEventListener("click", () => {
        playRound(2);
    });

    scissor_button.addEventListener("click", () => {
        playRound(3);
    });


    

}

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();

    let humanWin = undefined;
    let draw = false;

    switch(humanChoice) {
        case 1:
            humanAction = "You chose rock. "
            if (computerChoice == 2) {
                humanWin = false;
            } else if (computerChoice == 3) {
                humanWin = true;
            } else if (computerChoice == 1) {
                draw = true;
            }
            break;
        case 2:
            humanAction = "You chose paper. "
            if (computerChoice == 1) {
                humanWin = true;
            } else if (computerChoice == 3) {
                humanWin = false;
            } else if (computerChoice == 2) {
                draw = true;
            }
            break;
        case 3:
            humanAction = "You chose scissors. "
            if (computerChoice == 1) {
                humanWin = false;
            } else if (computerChoice == 2) {
                humanWin = true;
            } else if (computerChoice == 3) {
                draw = true;
            }
            break;
    }

    document.querySelector(".computer-action").textContent = humanAction + "Computer chose " + (computerChoice == 1 ? "rock" : (computerChoice == 2 ? "paper" : "scissors"));

    if (humanWin === true) {
        humanScore++;
        document.querySelector(".result").textContent = "You got one point! :)";
    } else if (draw) {
        document.querySelector(".result").textContent = "It's a draw!";
    } else {
        computerScore++;
        document.querySelector(".result").textContent = "Computer got one point :(";
    }

    document.querySelector(".computer-score").textContent = "Computer = " + computerScore;
    document.querySelector(".human-score").textContent = "Human = " + humanScore;

    if (humanScore === 5 || computerScore === 5) {
        let winner = humanScore === 5 ? "You win!" : "Computer wins!";
        alert(winner + " Restarting game");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".computer-action").textContent = "";
    document.querySelector(".result").textContent = "";
    document.querySelector(".computer-score").textContent = "Computer = 0";
    document.querySelector(".human-score").textContent = "Human = 0";
    enableGame(); 
}

function disableGame() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

function enableGame() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
}

getHumanChoice();
