//This is a script to play a simple player vs computer game of rock paper scissors

// declare function to determine player selection
function getPlayerSelection(){
    let playerSelection = prompt("Enter selection: Rock, Paper, Scissors").toLowerCase();
    if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        console.log("You must enter either 'Rock' 'Paper' or 'Scissors'");
        return;
    }
    return playerSelection;
}

// declare function to determine random computer selection
function getComputerSelection(){
    const possibleThrows = ["rock", "paper", "scissors"];
    let computerSelection = possibleThrows[Math.floor(Math.random() * 3)];
    return computerSelection;
}

//declare function that compares player selection to computer selection and returns winner (tie, player, computer)
function comparePlayerToComputer(playerSelection, computerSelection){
    //check for tie case
    if (playerSelection == computerSelection){
        return "tie";
    }
    //check for player win
    if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock")){
            return "player";
        }
    return "computer";
}

// declare function that displays winner
function displayWinner(winner, playerSelection, computerSelection){
    if (winner == "tie") {
        console.log(`No winner! Player and Computer both threw ${playerSelection}`);
        return;
    } else if (winner == "player") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return;
    }
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    return;
}

//get player selection
let playerSelection = getPlayerSelection();
console.log(playerSelection);

//get computer selection
let computerSelection = getComputerSelection();
console.log(computerSelection);

//get winner
let winner = comparePlayerToComputer(playerSelection, computerSelection);

//display winner
displayWinner(winner, playerSelection, computerSelection);
