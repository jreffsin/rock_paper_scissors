//This is a script to play a simple player vs computer game of rock paper scissors

//store pSelect img element in variable
let pSelectImg = document.querySelector('.pSelectImg');

let cSelectImg = document.querySelector('.cSelectImg');

let header = document.querySelector(".header");

let pScore = document.querySelector(".pSecondDig");
let cScore = document.querySelector(".cSecondDig");

let playerScore = 0;
let compScore = 0;

//store the player select buttons into variable
let buttons = document.querySelectorAll('.btn');
console.log(buttons);

//add click event listener to selection buttons
buttons.forEach(button => button.addEventListener("click", playRound));

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

//declare function to determine random computer selection
function getComputerSelection(){
    const possibleThrows = ["rock", "paper", "scissors"];
    let computerSelection = possibleThrows[Math.floor(Math.random() * 3)];

    if (computerSelection === "rock"){
        cSelectImg.src = "images/rock.png";
    } else if (computerSelection === "paper"){
        cSelectImg.src = "images/paper.png";
    }
    else {
        cSelectImg.src = "images/scissors.png";
    }
    return computerSelection;
}

//declare function to determine and show player selection
function getPlayerSelection(e){
    // let timer = true;

     //determine player selection and change pSelectImg to appropriate icon with styling
    if (e.target.classList.contains("rock")){
        buttons[0].style.boxShadow = "0 0 15px green";
        buttons[0].style.transform = "scale(1.1)";
        pSelectImg.src = "images/rock.png";
        return 'rock';

    } else if (e.target.classList.contains("paper")){
        pSelectImg.src = "images/paper.png";
        buttons[1].style.boxShadow = "0 0 15px green";
        buttons[1].style.transform = "scale(1.1)";
        return 'paper';
    }
    else {
        pSelectImg.src = "images/scissors.png";
        buttons[2].style.boxShadow = "0 0 15px green";
        buttons[2].style.transform = "scale(1.1)";
        return 'scissors';
    }
}

//declare function to display winner text
function displayWinnerText (winner){
    if (winner == 'player'){
        header.innerText = "Player Wins!"
        header.style.color = "black";
    } else if (winner == 'computer'){
        header.innerText = "Computer Wins!"
        header.style.color = "black";
    } else {
        header.innerText = "Tie!"
        header.style.color = "black";
    }
}

//declare adjust score function
function adjustScore(winner){
    if (winner == "player"){
        playerScore++;
        pScore.src = `images/scoreboard/${playerScore}.png`
    } else if (winner == "computer"){
        compScore++;
        cScore.src = `images/scoreboard/${compScore}.png`
    }
    return;
}

//declare function to determine player selection
function playRound(e){

    let pSelection = getPlayerSelection(e);

    let cSelection = getComputerSelection();

    let winner = comparePlayerToComputer(pSelection, cSelection);

    displayWinnerText(winner);

    adjustScore(winner);

    // resetStyling();

    //checkForEnd();

};



//when player makes selection return that selection


//when player makes a selection, put their selection in player selection box
//put computer selection in computer selection box
 

// // declare function that displays winner
// function displayWinner(winner, playerSelection, computerSelection){
//     if (winner == "tie") {
//         console.log(`No winner! Player and Computer both threw ${playerSelection}.`);
//         return;
//     } else if (winner == "player") {
//         console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
//         return;
//     }
//     console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
//     return;
// }

// //declare function that adjusts score
// function adjustScore(winner, score){
//     if (winner == "player"){
//         score[0] += 1;
//         return score;
//     } else if (winner == "computer") {
//         score[1] += 1;
//         return score;
//     }
//     score[2] += 1;
//     return score;
// }

// //declare function that displays final score
// function displayFinalScore(score){
//     if (score[0] > score[1]){
//         console.log(`Final score - You:${score[0]} Computer:${score[1]}. You win!`);
//         return;
//     } else if (score[0] < score[1]){
//         console.log(`Final score - You:${score[0]} Computer:${score[1]}. You lose!`);
//         return;
//     }
//     console.log(`Final score - You:${score[0]} Computer:${score[1]}. It's a tie!`);
//     return;
// }

// //declare five-round game function
// function game() {
//     let score = [0,0,0]
//     for (let i = 0; i < 5; i++){
//         //get player selection
//         let playerSelection = getPlayerSelection();
//         console.log(playerSelection);

//         //get computer selection
//         let computerSelection = getComputerSelection();
//         console.log(computerSelection);

//         //get winner
//         let winner = comparePlayerToComputer(playerSelection, computerSelection);

//         //display winner
//         displayWinner(winner, playerSelection, computerSelection);

//         //adjust score
//         score = adjustScore(winner, score);
//     }
//     //display final score
//     displayFinalScore(score);
// }

//play game
// game();



