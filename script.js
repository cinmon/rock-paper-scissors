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
        // Human drew rock
        case 1:
            if(computerChoice == 2) {
                // Rock vs. Paper
                humanWin = false;
            }
            else if(computerChoice == 3) {
                // Rock vs. Scissors
                humanWin = true;
            }
            else if(computerChoice == 1) {
                // Rock vs. Rock
                draw = true;
            }
            break;
        case 2:
            // Human drew paper
            if(computerChoice == 1) {
                // Paper vs. Rock
                humanWin = true;
            }
            // Paper vs. Scissors
            else if(computerChoice == 3) {
                humanWin = false;
            }
            // Paper vs. Paper
            else if(computerChoice == 2) {
                draw = true;
            }
            break;
        case 3:
            // Human drew scissors
            if(computerChoice == 1) {
                // Scissors vs. Rock
                humanWin = false;
            }
            else if(computerChoice == 2) {
                // Scissors vs. Paper
                humanWin = true;
            }
            else if(computerChoice == 3) {
                // Scissors vs. Scissors
                draw = true;
            }
            break;
    }

    const computer_action_text = document.createElement("div");
    document.querySelector(".computer-action").textContent = "Computer chose " + (computerChoice == 1 ? "rock" : (computerChoice == 2 ? "paper" : "scissors"));

    const result_text = document.createElement("div");
    if(humanWin == true) {
        humanScore++;
        document.querySelector(".result").textContent = "You win! :)";
    }
    else if (draw){
        humanScore++;
        computerScore++;
        document.querySelector(".result").textContent = "It's a draw!";
    }
    else {   
        computerScore++;
        document.querySelector(".result").textContent = "You lose! :(";
    }

    document.querySelector(".computer-score").textContent = "Computer = " + computerScore;
    document.querySelector(".human-score").textContent = "Human = " + humanScore;

}

getHumanChoice();