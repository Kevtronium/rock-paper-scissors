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
