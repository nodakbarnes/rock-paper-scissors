function game() {
  // keep score
  let wins = 0;
  let losses = 0;
  
  function computerPlay() {
    // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    switch(playerSelection) {
      case computerSelection:
        return "It's a tie!";
      case "rock":
        if(computerSelection === "paper") {
          losses += 1;
          return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        wins += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`; 
      case "paper":
        if(computerSelection === "scissors") {
          losses += 1;
          return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        wins += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`; 
      case "scissors":
        if(computerSelection === "rock") {
          losses += 1;
          return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        wins += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`; 
      default:
        return 'Oops, something went wrong!'
    }
    
  }
  
  while (wins < 3 && losses < 3) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Enter Rock, Paper, or Scissors", "Rock");
    
    alert(playRound(playerSelection, computerSelection) + `  Won: ${wins}  Lost: ${losses}`);
  }
  
  if (wins > losses) {
    document.getElementById("content").innerHTML += "Congratulations, you win this game!" + '<br><br>';
  } else {
    document.getElementById("content").innerHTML += "Sorry, you lose this game!" + '<br><br>';
  }

}
