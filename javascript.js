const choices = ['rock', 'paper', 'scissors'];
const computerSelection = Math.floor(Math.random() * choices.length);
console.log(computerSelection, choices[computerSelection]); 

const playerEntry = window.prompt("Rock - Paper - Scissors");
const playerSelection = playerEntry.toLowerCase();
console.log(playerSelection);

let iHopeThisWorks = choices[computerSelection];

let result;

function playRound(iHopeThisWorks, playerSelection) {

  if (iHopeThisWorks === playerSelection) {
    result = "It's a tie!";
  }  else if (iHopeThisWorks === 'rock' && playerSelection === 'paper') {
    result = "You win! Paper beats rock!";
  }  else if (iHopeThisWorks === 'rock' && playerSelection === 'scissors') {
    result = "You lose! Rock beats scissors!";
  }  else if (iHopeThisWorks === 'paper' && playerSelection === 'rock') {
    result = "You lose! Paper beats rock!"
  }  else if (iHopeThisWorks === 'paper' && playerSelection === 'scissors') {
    result = "You win! Scissors beats paper!"
  }  else if (iHopeThisWorks === 'scissors' && playerSelection === 'rock') {
    result = "You win! Rock beats scissors!";
  }  else if (iHopeThisWorks === 'scissors' && playerSelection === 'paper') {
    result = "You lose! Scissors beats paper!"
  } else {
    result = "Sorry, please try again.";
  }
  console.log(result);
}


playRound(iHopeThisWorks, playerSelection);





/* This is not doing a damn thing i think...yep nada
function getComputerChoice() {
  return choices[computerSelection]; 
}
*/