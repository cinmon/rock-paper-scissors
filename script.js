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
    console.log(`Choice: ${randomNumber}`, randomNumber);
    return choice;
}

console.log(getComputerChoice());