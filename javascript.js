const choices = ['rock', 'paper', 'scissors'];
const computerSelection = Math.floor(Math.random() * choices.length);
console.log(computerSelection, choices[computerSelection]);

function getComputerChoice() {
  return choices[computerSelection];
}