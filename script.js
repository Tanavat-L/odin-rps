function getComputerChoice(){
    let a = Math.random()
    if( a < (1/3)){
        return "rock";
    }
    else if ( a >= (1/3) && a < (2/3)){
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(){
    let choice = prompt("rock, paper, scissors:");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice){
        console.log(`Tie! ${humanChoice} is the same as ${computerChoice}`);
        result.textContent = `Tie! ${humanChoice} is the same as ${computerChoice}`;
    }
    else if (humanChoice == "rock"){
        switch (computerChoice){
            case "paper":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
                break;
            case "scissors":
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else if (humanChoice == "paper"){
        switch (computerChoice){
            case "scissors":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                break;
            case "rock":
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else if (humanChoice == "scissors"){
        switch (computerChoice){
            case "rock":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                break;
            case "paper":
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else {
        console.log("Enter a valid choice");
    }
    let hScore = document.querySelector("#human-score");
    let cScore = document.querySelector("#computer-score");

    hScore.textContent = `Your score: ${humanScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;
}

let choice = document.querySelector(".choice");
let result = document.querySelector("#result");

choice.addEventListener("click", (e) => {
    let target = e.target;
    playRound(`${target.id}`,getComputerChoice());
    if(humanScore == 5){
        result.textContent = "You won against the computer!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5){
        result.textContent = "The comptuer won!";
        humanScore = 0;
        computerScore = 0;
    }
});