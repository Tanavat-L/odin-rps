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
    }
    else if (humanChoice == "rock"){
        switch (computerChoice){
            case "paper":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                break;
            case "scissors":
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
        }
    }
    else if (humanChoice == "paper"){
        switch (computerChoice){
            case "scissors":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                break;
            case "rock":
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
        }
    }
    else if (humanChoice == "scissors"){
        switch (computerChoice){
            case "rock":
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
                break;
            case "paper":
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
        }
    }
    else {
        console.log("Enter a valid choice");
    }
}

function playGame(){
    for(i = 0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore > computerScore){
        alert(`You win! your score:${humanScore}, computer score:${computerScore}`)
    }
    else{
        alert(`You lose! your score:${humanScore}, computer score:${computerScore}`)
    } 
    humanScore = 0;
    computerScore = 0;
}

let choice = document.querySelector("choice");

choice.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id) {
        case "rock" :
            playRound(`${target.id}`,getComputerChoice());
            break;

        case "paper" :
            playRound(`${target.id}`,getComputerChoice());
            break;

        case "scissors" :
            playRound(`${target.id}`,getComputerChoice());
            break;
    }
});