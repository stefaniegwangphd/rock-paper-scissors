let playerWins=0;
let computerWins=0;
let playerChoice;
const buttons = document.querySelectorAll('.btn');
const optionBtn = document.querySelectorAll('div.optionBtn button');
const resetBtn = document.querySelector('#reset');
const choices = [ "rock","paper","scissors" ];

resetBtn.addEventListener('click',() => location.reload());
  
let getComputerChoice=function() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let playRound=function(playerSelection,computerSelection) {
  playerRound.textContent=`${playerSelection}`;
  computerRound.textContent=`${computerSelection}`;
    if (playerSelection==computerSelection) {
      playerScore.textContent= playerWins;
      computerScore.textContent=computerWins;
    }
    else if ((playerSelection=='rock' && computerSelection=='scissors') |(playerSelection=='paper' && computerSelection=='rock') ||(playerSelection=='scissors' &&computerSelection=='paper')) {
      playerWins++;
      if (playerWins===5 || computerWins===5){
        gameWinner();
      }
  }
    else {
      computerWins++;
      if (playerWins===5 || computerWins===5){
        gameWinner();
      }
    }
  }

function gameWinner() {
  if (playerWins===5) {
    gameResults.textContent=`Game over. You won!`;
  }
  else {
    gameResults.textContent=`Game over. You lost!`;
  }
  optionBtn.forEach(button => { button.removeEventListener('click') });
}

function getPlayerChoice(e){
  let playerSelection = (e.target.id);
  playerChoice=e.target.textContent;
  playRound(playerSelection, getComputerChoice());
  playerScore.textContent=`${playerWins}`;
  computerScore.textContent=`${computerWins}`;
}

const roundResults = document.querySelector('#roundResults');
const buttonBox = document.querySelector('#buttonBox');
const playerScoreBox = document.querySelector('#playerScore');
const computerScoreBox = document.querySelector('#computerScore');

const content =document.createElement('div');
const gameResults=document.createElement('div');
const playerRound=document.createElement('div');
const computerRound=document.createElement('div');
const playerScore=document.createElement('div');
const computerScore=document.createElement('div');

playerScoreBox.appendChild(playerScore);
playerScoreBox.appendChild(playerRound);
computerScoreBox.appendChild(computerScore);
computerScoreBox.appendChild(computerRound);

buttonBox.appendChild(gameResults);

scoreBox.appendChild(content);
