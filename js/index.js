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

function createWinnerMsg(playerChoice, computerChoice, winner) {
  let msg;
  let playerChoiceUpperCased =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  let computerChoiceUpperCased =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  if (winner === "tie") {
    msg = `It's a tie! Both you and the computer chose ${playerChoiceUpperCased}.`;
  } else if (winner === "player") {
    msg = `You win! ${playerChoiceUpperCased} beats ${computerChoiceUpperCased}.`;
  } else {
    msg = `You lose! ${computerChoiceUpperCased} beats ${playerChoiceUpperCased}.`;
  }

  return msg;
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  let msg;
  let winner;

  winner = getWinner(playerChoice, computerSelection);
  msg = createWinnerMsg(playerChoice, computerSelection, winner);

  return msg;
}
