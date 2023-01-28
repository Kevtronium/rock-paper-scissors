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

function displayScore(scores) {
  console.log(`----------Score----------
Player: ${scores.playerScore}
Computer: ${scores.computerScore}`);
}

function displayVictoryMsg(scores) {
  if (scores.playerScore > scores.computerScore) {
    console.log("You win!");
  } else if (scores.computerScore > scores.playerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
}

function updateScores(scores, msg) {
  if (msg.search("win") !== -1) {
    scores.playerScore++;
  } else if (msg.search("lose") !== -1) {
    scores.computerScore++;
  }
  return scores;
}

function getPlayerChoice() {
  let playerChoice;
  let invalidInput = true;

  while (invalidInput) {
    playerChoice = prompt("Rock, Paper, or Scissors? Please choose one.");
    playerChoice = playerChoice.toLowerCase();

    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      invalidInput = false;
    } else {
      alert("You must choose Rock, Paper, or Scissors. Please try again.");
    }
  }
  return playerChoice;
}

function game() {
  let playerChoice;
  let computerChoice;
  let scores = { playerScore: 0, computerScore: 0 };
  let msg;

  for (let i = 0; i < 5; i++) {
    if (i === 4) {
      console.log("----------Final Round----------");
      playerChoice = getPlayerChoice();
      computerChoice = getComputerChoice();
      msg = playRound(playerChoice, computerChoice);
      console.log(msg);

      updateScores(scores, msg);
      displayScore(scores);
      displayVictoryMsg(scores);
    } else {
      console.log(`----------Round ${i + 1}----------`);
      playerChoice = getPlayerChoice();
      computerChoice = getComputerChoice();
      msg = playRound(playerChoice, computerChoice);
      console.log(msg);

      updateScores(scores, msg);
      displayScore(scores);
    }
  }
}

game();
