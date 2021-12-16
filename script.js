function computerPlay(){
    const possibleThrows = ["Rock", "Paper", "Scissors"];
    let computerThrow = possibleThrows[Math.floor(Math.random() * 3)];
    return computerThrow;
}

computerPlay();