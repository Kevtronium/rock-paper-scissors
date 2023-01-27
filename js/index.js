function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  let choice;

  if (num === 0) {
    choice = "rock";
  } else if (num === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function getWinner(playerChoice, computerChoice) {
  let winner;

  if (playerChoice === computerChoice) {
    winner = "tie";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      winner = "computer";
    } else {
      winner = "player";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner = "computer";
    } else {
      winner = "player";
    }
  } else {
    if (computerChoice === "rock") {
      winner = "computer";
    } else {
      winner = "player";
    }
  }

  return winner;
}
