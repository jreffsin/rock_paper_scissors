//This is a program to play a simple player vs computer game of rock paper scissors

//store important html elements in variables
//popup and gamearea
let popUp = document.querySelector('.popUp');
let popUpText = document.querySelector('.popUpText');
let popUpButton = document.querySelector('.popUpButton');
let gameArea = document.querySelector('.gameArea');

//image elements for round selection
let pSelectImg = document.querySelector('.pSelectImg');
let cSelectImg = document.querySelector('.cSelectImg');

//header element for displaying round outcome
let header = document.querySelector('.header');

//score elements
let pScore = document.querySelector(".pSecondDig");
let cScore = document.querySelector(".cSecondDig");
let pScoreBoard = document.querySelector(".pScoreBoard");
let cScoreBoard = document.querySelector(".cScoreBoard");

//player buttons
let buttons = document.querySelectorAll('.btn');

//initialize playerScore and compScore variables
let playerScore = 0;
let compScore = 0;

//add event listener to popup to allow game to start
popUpButton.addEventListener('click', resetGame);

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
        cSelectImg.src = "images/rock_flip.png";
    } else if (computerSelection === "paper"){
        cSelectImg.src = "images/paper_flip.png";
    }
    else {
        cSelectImg.src = "images/scissors_flip.png";
    }
    setTimeout(() => {
        cSelectImg.src = "";
    }, 1400);
    return computerSelection;
}

//declare function to determine and show player selection
function getPlayerSelection(e){
    // let timer = true;

     //determine player selection and change pSelectImg to appropriate icon with styling
    if (e.target.classList.contains("rock")){
        // buttons[0].style.boxShadow = "0 0 15px green";
        buttons[0].style.transform = "scale(1.2)";
        setTimeout(() => {
            buttons[0].style.transform = "scale(1)";
        }, 600);
        pSelectImg.src = "images/rock.png";
        setTimeout(() => {
            pSelectImg.src = "";
        }, 1400);
        return 'rock';

    } else if (e.target.classList.contains("paper")){
        pSelectImg.src = "images/paper.png";
        buttons[1].style.transform = "scale(1.2)";
        setTimeout(() => {
            buttons[1].style.transform = "scale(1)";
        }, 600);
        setTimeout(() => {
            pSelectImg.src = "";
        }, 1400);
        return 'paper';
    }
    else {
        pSelectImg.src = "images/scissors.png";
        buttons[2].style.transform = "scale(1.2)";
        setTimeout(() => {
            buttons[2].style.transform = "scale(1)";
        }, 600);
        setTimeout(() => {
            pSelectImg.src = "";
        }, 1400);
        return 'scissors';
    }
}

//declare function to display winner text
function displayWinnerText (winner){
    if (winner == 'player'){
        header.innerText = "You Score";
        header.style.color = "black";
    } else if (winner == 'computer'){
        header.innerText = "Computer Scores";
        header.style.color = "black";
    } else {
        header.innerText = "Tie";
        header.style.color = "black";
    }
    setTimeout(()=>{
        header.style.color = "transparent";
    }, 1400);
}

//declare adjust score function
function adjustScore(winner){
    //increment wither playerScore or compScore and style change
    if (winner == "player"){
        playerScore++;
        setTimeout(() => {
            pScore.src = `images/scoreboard/${playerScore}.png`;
            pScoreBoard.style.boxShadow = "0 0 15px green";
        }, 1400);
        setTimeout(() => {
            pScoreBoard.style.boxShadow = "0 0 0 green";
        }, 1800)
    } else if (winner == "computer"){
        compScore++;
        setTimeout(() => {
            cScore.src = `images/scoreboard/${compScore}.png`;
            cScoreBoard.style.boxShadow = "0 0 15px green";
        }, 1400);
        setTimeout(() => {
            cScoreBoard.style.boxShadow = "0 0 0 green";
        }, 1800)
    }
    return;
}

//declare function to reset game
function resetGame(){
    playerScore = 0;
    compScore = 0;
    popUp.style.display = 'none';
    gameArea.style.display = 'flex';
    pScore.src = 'images/scoreboard/0.png';
    cScore.src = 'images/scoreboard/0.png';
    buttons.forEach(button => button.addEventListener("click", playRound));
}

//declare function to check for winner
function checkForWinner(){
    if (playerScore === 3){
        popUpText.innerText = "You win! Play again?"
        popUpButton.innerText = "Click to Play Again"
        popUpButton.addEventListener('click', resetGame);

        //after time delay open popup and hide gamearea
        setTimeout(() => {
            popUp.style.display = 'flex';
            gameArea.style.display = 'none';
        }, 2800);

    } else if (compScore === 3){
        popUpText.innerText = "Computer wins. Play again?"
        popUpButton.innerText = "Click to Play Again"
        popUpButton.addEventListener('click', resetGame);

        //after time delay open popup and hide gamearea
        setTimeout(() => {
            popUp.style.display = 'flex';
            gameArea.style.display = 'none';
        }, 2800);

    } else {

        //if no winner, add click event listener back to player selection buttons
        setTimeout(() => {
            buttons.forEach(button => button.addEventListener("click", playRound));
        }, 1800);
    }
}

//declare removeClickEvent function
function removeClickEvent(){
    // remove click event listener
    // so that click event only happens once per animation
    buttons.forEach(button => button.removeEventListener("click", playRound));
}

//declare function to play a round once player makes their selection
function playRound(e){

    removeClickEvent();

    let pSelection = getPlayerSelection(e);

    let cSelection = getComputerSelection();

    let winner = comparePlayerToComputer(pSelection, cSelection);

    displayWinnerText(winner);

    adjustScore(winner);

    checkForWinner();

};



