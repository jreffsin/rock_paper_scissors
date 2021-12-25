//This is a script to play a simple player vs computer game of rock paper scissors

//declare function to determine player selection
function getPlayerSelection(){
    let playerSelection = prompt("Enter selection: Rock, Paper, Scissors").toLowerCase();

    //check for invalid inputs
    if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        console.log("You must enter either 'Rock' 'Paper' or 'Scissors'");
        return;
    }

    return playerSelection;
}

//declare function to determine random computer selection
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
    //else computer wins
    return "computer";
}

// declare function that displays winner
function displayWinner(winner, playerSelection, computerSelection){
    if (winner == "tie") {
        console.log(`No winner! Player and Computer both threw ${playerSelection}.`);
        return;
    } else if (winner == "player") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return;
    }
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    return;
}

//declare function that adjusts score
function adjustScore(winner, score){
    if (winner == "player"){
        score[0] += 1;
        return score;
    } else if (winner == "computer") {
        score[1] += 1;
        return score;
    }
    score[2] += 1;
    return score;
}

//declare function that displays final score
function displayFinalScore(score){
    if (score[0] > score[1]){
        console.log(`Final score - You:${score[0]} Computer:${score[1]}. You win!`);
        return;
    } else if (score[0] < score[1]){
        console.log(`Final score - You:${score[0]} Computer:${score[1]}. You lose!`);
        return;
    }
    console.log(`Final score - You:${score[0]} Computer:${score[1]}. It's a tie!`);
    return;
}

//declare five-round game function
function game() {
    let score = [0,0,0]
    for (let i = 0; i < 5; i++){
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

        //adjust score
        score = adjustScore(winner, score);
    }
    //display final score
    displayFinalScore(score);
}

//play game
game();



