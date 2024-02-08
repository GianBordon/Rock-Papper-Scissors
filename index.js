console.log("Rock Paper Scissors GAME!");

let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

// Función para crear un botón con su respectiva imagen y texto
function createButton(id, value, imagePath) {
    const container = document.querySelector('.container');

    // Crear la tarjeta (contenedor)
    const card = document.createElement('div');
    card.classList.add('card');

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = value;

    // Crear el botón
    const button = document.createElement('input');
    button.type = 'submit';
    button.id = id;
    button.value = value;
    button.classList.add('btn')

    // Agregar la imagen y el botón a la tarjeta
    card.appendChild(img);
    card.appendChild(button);

    // Agregar la tarjeta al contenedor principal
    container.appendChild(card);
}

// Crear botones con sus imágenes
createButton('rockButton', 'Rock', './assets/rock.jpg');
createButton('paperButton', 'Paper', './assets/papper.jpg');
createButton('scissorsButton', 'Scissors', './assets/scissors.jpg');

// Event listeners para los botones
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');


rockButton.addEventListener('click', (event) => {
    event.preventDefault();
    handlePlayerChoice('Rock');
});

paperButton.addEventListener('click', (event) => {
    event.preventDefault();
    handlePlayerChoice('Paper');
});

scissorsButton.addEventListener('click', (event) => {
    event.preventDefault();
    handlePlayerChoice('Scissors');
});

const handlePlayerChoice = (choice)=>{
    const computerSelection = getComputerChoice();
    const roundResult = playRound(choice, computerSelection); 
    updateScore(roundResult);
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = roundResult;
    if (roundResult.trim() !== '') {
        resultDisplay.classList.add('show'); 
    } else {
        resultDisplay.classList.remove('show');
    }
    console.log("Seleccion: ", choice)

    roundsPlayed++;
    if (roundsPlayed === 5) {
        displayFinalResult();
    }
}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const result = choices[Math.floor(Math.random() * choices.length)];
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

const updateScore = (roundResult) => {
    if (roundResult.includes("Player Wins")) {
        playerWins++;
    } else if (roundResult.includes("CPU Wins")) {
        computerWins++;
    }
    console.log(playerWins, computerWins)
}

const displayFinalResult = () => {
    const finalResultDisplay = document.getElementById('finalResultDisplay');
    if (playerWins > computerWins) {
        finalResultDisplay.textContent = "¡Ganaste el juego!";
    } else if (playerWins < computerWins) {
        finalResultDisplay.textContent = "La CPU ganó el juego.";
    } else {
        finalResultDisplay.textContent = "El juego terminó en empate.";
    }
    finalResultDisplay.classList.add('show');
}

// Función para jugar un juego completo
function playGame(){
        const playerSelection = getComputerChoice(); 
        const computerSelection = getComputerChoice(); 
        const roundResult = playRound(playerSelection, computerSelection);
        console.log("Round Result: ", roundResult);
}


const resultDisplay = document.getElementById('resultDisplay');

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    roundsPlayed = 0;
    const finalResultDisplay = document.getElementById('finalResultDisplay');
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = '';
    resultDisplay.classList.remove('show');
    finalResultDisplay.textContent = '';
    finalResultDisplay.classList.remove('show');
    console.log("Juego reiniciado");
});
