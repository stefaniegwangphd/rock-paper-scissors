let playerWins=0;
let computerWins=0;
let playerChoice;
const buttons = document.querySelectorAll('.btn');
const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const choices = [ "rock","paper","scissors" ];

let getComputerChoice=function() {
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
  }

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let playRound=function(playerSelection,computerSelection) {
  if (playerWins===5 || computerWins===5) {
    if (playerWins===5) {
      gameResults.textContent=`You won the game ${playerWins} to ${computerWins}`;
    }
    else {
      gameResults.textContent=`You lost the game ${playerWins} to ${computerWins}`;
    }
    } else {
      if (playerSelection==computerSelection) {
        roundResults.textContent= "It's a tie!";
      }
      else if ((playerSelection=='rock' && computerSelection=='scissors') ||(playerSelection=='paper' && computerSelection=='rock') ||(playerSelection=='scissors' && computerSelection=='paper')) {
        playerWins++;
        if (playerWins===5 || computerWins===5){
          gameWinner();
        } else {
        roundResults.textContent= `You win this round with ${playerSelection} vs ${computerSelection}`;
      }
    }
      else {
        computerWins++;
        if (playerWins===5 || computerWins===5){
          gameWinner();
        }
        else {
          roundResults.textContent = `You lose this round with ${computerSelection} vs ${playerChoice}`;
        }
      }
    }
}

function gameWinner() {
  if (playerWins===5) {
    gameResults.textContent=`You won the game ${playerWins} to ${computerWins}`;
  }
  else {
    gameResults.textContent=`You lost the game ${playerWins} to ${computerWins}`;
  }
  optionBtn.forEach(button => { button.removeEventListener('click') });

}

function getPlayerChoice(e){
  let playerSelection = (e.target.id);
  playerChoice=e.target.textContent;
  playRound(playerSelection, getComputerChoice());
  currentScore.textContent=`you: ${playerWins} computer: ${computerWins}`;
}

const container = document.querySelector('#container');
const content =document.createElement('div');
const gameResults=document.createElement('div');
content.classList.add('content');
content.textContent = "The running score is:";
const currentScore=document.createElement('div');
content.appendChild(currentScore);
content.appendChild(gameResults);

container.appendChild(content);





// old code

// function playRound(){
//   let i=0;
//   while (playerWins <5 && computerWins <5){
//     let playerSelection = getPlayerChoice();
//     let computerSelection=getComputerChoice();
//     // console.log(playerSelection, 'vs', computerSelection);
//     playRound(playerSelection,computerSelection);
//     currentScore.textContent=`you: ${playerWins} computer: ${computerWins}`;
//     // console.log("your score = " + playerWins);
//     // console.log("Computer's score = " + computerWins);
//     i++;
//     }

//   if (playerWins===5 || computerWins===5){
//     if (playerWins===5) {
//       console.log('You won the game', playerWins, 'to', computerWins)
//     }
//     else {
//         console.log('You lost the game', playerWins,'to',computerWins)
//     }
//   }
// }
