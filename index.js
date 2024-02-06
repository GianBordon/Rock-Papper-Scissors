console.log("Rock Papper Scissors GAME!");

function getComputerChoise(){
    const choise = ["Rock", "Paper", "Scissors"];
    const result = choise[Math.floor(Math.random() * choise.length)];
    return result;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(); 
    computerSelection = computerSelection.toLowerCase(); 

    if (playerSelection === "rock" && computerSelection === "paper"){ // rock vs paper
        return "Paper beats Rock, CPU Wins";
    } else if (playerSelection === "paper" && computerSelection === "rock"){ // paper vs rock 
        return "Paper beats Rock, Player Wins";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){ // rock vs scissors
        return "Rock beats Scissors, Player Wins";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){ // scissors vs rock
        return "Rock beats Scissors, CPU Wins";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){ // paper vs scissors
        return "Scissors beats Paper, CPU Wins";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){ // scissors vs paper
        return "Scissors beats Paper, Player Wins";
    } else if(playerSelection === computerSelection ) { 
        return "Both chose the same option, so we have a draw";
    }
    return "Invalid selection!";
}


function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose: Rock, Paper or Scissors ?");
        const computerSelection = getComputerChoise(); 
        const roundResult = playRound(playerSelection, computerSelection);
        console.log("Round Result: ", roundResult);
        
    }

}

playGame();

