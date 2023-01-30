function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  let choice;

  if (num === 0) {
    choice = 'rock';
  } else if (num === 1) {
    choice = 'paper';
  } else {
    choice = 'scissors';
  }

  return choice;
}

function getWinner(playerChoice, computerChoice) {
  let winner;

  if (playerChoice === computerChoice) {
    winner = 'tie';
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      winner = 'computer';
    } else {
      winner = 'player';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      winner = 'computer';
    } else {
      winner = 'player';
    }
  } else {
    if (computerChoice === 'rock') {
      winner = 'computer';
    } else {
      winner = 'player';
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

  if (winner === 'tie') {
    msg = `It's a tie! Both you and the computer chose ${playerChoiceUpperCased}.`;
  } else if (winner === 'player') {
    msg = `You win! ${playerChoiceUpperCased} beats ${computerChoiceUpperCased}.`;
  } else {
    msg = `You lose! ${computerChoiceUpperCased} beats ${playerChoiceUpperCased}.`;
  }

  return msg;
}

function getVictoryMsg(scores) {
  if (scores.playerScore > scores.computerScore) {
    return 'You win!';
  } else if (scores.computerScore > scores.playerScore) {
    return 'You lose!';
  } else {
    return "It's a tie!";
  }
}

function getNextRoundText() {
  const currRound = document.getElementById('round').textContent;

  if (currRound.includes('4')) {
    return 'Final Round';
  } else {
    const words = currRound.split(' ');
    let nextNum = parseInt(words[1]) + 1;
    return `Round ${nextNum}`;
  }
}

function getCurrScores(scores) {
  const pScore = document.getElementById('player-score').textContent;
  scores.playerScore = parseInt(pScore.charAt(pScore.length - 1));

  const cScore = document.getElementById('computer-score').textContent;
  scores.computerScore = parseInt(cScore.charAt(cScore.length - 1));

  return scores;
}

function updateScores(scores, msg) {
  if (msg.search('win') !== -1) {
    scores.playerScore++;
  } else if (msg.search('lose') !== -1) {
    scores.computerScore++;
  }
  return scores;
}

function updateUI(scores, winnerMsg, nextRoundText, victoryMsg) {
  const currRound = document.getElementById('round');
  const playerScore = document.getElementById('player-score');
  const computerScore = document.getElementById('computer-score');
  const results = document.getElementById('results');

  results.textContent = winnerMsg;
  playerScore.textContent = `You: ${scores.playerScore}`;
  computerScore.textContent = `Computer: ${scores.computerScore}`;

  if (victoryMsg !== '') {
    const resultsContainer = document.querySelector('.results-container');
    const victoryMsgEle = document.createElement('p');
    victoryMsgEle.textContent = victoryMsg;
    resultsContainer.appendChild(victoryMsgEle);
  } else {
    currRound.textContent = nextRoundText;
  }
}

function playRound(e) {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  let msg = '';
  let winner = '';
  let scores = { playerScore: 0, computerScore: 0 };
  let nextRoundText = '';
  let victoryMsg = '';
  const currRound = document.getElementById('round').textContent;

  winner = getWinner(playerChoice, computerChoice);
  msg = createWinnerMsg(playerChoice, computerChoice, winner);
  scores = getCurrScores(scores);
  scores = updateScores(scores, msg);

  if (currRound === 'Final Round') {
    victoryMsg = getVictoryMsg(scores);
  } else {
    nextRoundText = getNextRoundText();
  }

  updateUI(scores, msg, nextRoundText, victoryMsg);
}

function initalizeBtns() {
  const btns = document.querySelectorAll('button');

  btns.forEach((btn) => btn.addEventListener('click', playRound));
}

initalizeBtns();
