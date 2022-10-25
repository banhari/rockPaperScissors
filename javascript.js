const choices = ['rock', 'paper', 'scissors'];
const computerSelection = Math.floor(Math.random() * choices.length);
console.log(computerSelection, choices[computerSelection]);

/* This is not doing a damn thing i think...yep nada
function getComputerChoice() {
  return choices[computerSelection]; 
}
*/

const playerEntry = window.prompt();
playerSelection = playerEntry.toLowerCase();
console.log(playerSelection);


function playRound(computerSelection, playerSelection) {
  let result;
  if (computerSelection === playerSelection) {
    result = "It's a tie!";
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    result = "You win! Paper beats rock!";
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    result = "You lose! Rock beats scissors!";
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    result = "You lose! Paper beats rock!"
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    result = "You win! Scissors beats paper!"
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    result = "You win! Rock beats scissors!";
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    result = "You lose! Scissors beats paper!"
  } else {
    result = "Sorry, please try again.";
  }

  return result;
}
