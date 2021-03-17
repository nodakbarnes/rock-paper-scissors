const initializeGame = () => {
  wins = 0;
  losses = 0;
  hideChoices(false);
  document.getElementById("score").innerHTML = "";
  document.getElementById("round").innerHTML = "";
  document.getElementById("results").innerHTML = "";
  playBtn.textContent = "Game on!";
  playBtn.style.backgroundColor = "green";
  playBtn.style.color = "white";
}

const hideChoices = hidden => {
  const choices = document.getElementById("choices");
  if (hidden) {
    choices.style.display = "none";
  } else {
    choices.style.display = "block";
  }
}

const computerPlay = () => {
  let choices = ["rock", "paper", "scissors"];
  // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
  return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  switch(playerSelection) {
    case computerSelection:
      return "It's a tie!";
    case "rock":
      if(computerSelection === "paper") {
        losses += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`.fontcolor("red");
      }
      wins += 1;
      return `You win! ${playerSelection} beats ${computerSelection}`.fontcolor("green"); 
    case "paper":
      if(computerSelection === "scissors") {
        losses += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`.fontcolor("red");
      }
      wins += 1;
      return `You win! ${playerSelection} beats ${computerSelection}`.fontcolor("green"); 
    case "scissors":
      if(computerSelection === "rock") {
        losses += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`.fontcolor("red");
      }
      wins += 1;
      return `You win! ${playerSelection} beats ${computerSelection}`.fontcolor("green"); 
    default:
      return "Let's play, good luck!".bold()
  }
}

const gameOver = () => (wins === 5 || losses === 5);

const updateScore = () => {
  document.getElementById("score").innerHTML = `<p>  Won: ${wins}  Lost: ${losses}</p>`;
}

const declareWinner = () => {
  if (wins > losses) {
    document.getElementById("results").innerHTML = `<h3>Congratulations, you win this game!</h3>`;
  } else {
    document.getElementById("results").innerHTML = `<h3>Sorry, you lose this game!</h3>`;
  }
}

// Initialize global variables
let wins;
let losses;

// Hide the choices initially before game starts
hideChoices(true);

// Use the play button to start game
const playBtn = document.querySelector("#play");
playBtn.addEventListener("click", initializeGame);

// Add event listeners for the choice buttons and play round when clicked
document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON" && !gameOver()) {
    const playerSelection = event.target.textContent;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    document.getElementById("round").innerHTML += `<p>${roundResult}</p>`;
    // Update the score after each round
    updateScore();
  } else {
    // Game over
    playBtn.textContent = "Play again";
    playBtn.style.backgroundColor = "red";
    declareWinner();
  }
});