var choices = ["rock", "paper", "scissor"];
var humanWins = 0;
var computerWins = 0;
var winCondition = false;
var reset = document.getElementById('reset');
reset.style.display = 'none';

const inputUserChoice = document.getElementsByClassName('choice');
const main = document.getElementById('main');

const scoreboard = document.createElement('div');
const score = document.createElement('h1');
const humanScore = document.createElement('h2');
const computerScore = document.createElement('h2');
const action = document.createElement('h2');

score.textContent = 'Scoreboard';
humanScore.textContent = `Human: ${humanWins}`;
computerScore.textContent = `Computer: ${computerWins}`;


scoreboard.appendChild(score);
scoreboard.appendChild(humanScore);
scoreboard.appendChild(computerScore);
scoreboard.appendChild(action);
main.appendChild(scoreboard);

for(i = 0; i < inputUserChoice.length; i++) {
  inputUserChoice[i].addEventListener('click', function() {
    let userChoice = this.id;
    action.textContent = determineWinner(userChoice,getComputerChoice());
    humanScore.textContent = `Human: ${humanWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
    playGame();
  })
};

reset.addEventListener('click', function() {
  humanWins = 0;
  computerWins = 0;
  humanScore.textContent = `Human: ${humanWins}`;
  computerScore.textContent = `Computer: ${computerWins}`;
  winCondition = false;

  for(i = 0; i < inputUserChoice.length; i++) {
    inputUserChoice[i].disabled = false;
  };
  
  reset.style.display = 'none';
})

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];

}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie! Please try again.";
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        computerWins += 1;
        return "Computer Won! Scissors beat paper.";
      } else {
        humanWins += 1;
        return "Human Won! Paper beats rock.";
      }
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        computerWins += 1;
        return "Computer Won! Paper beats rock.";
      } else {
        humanWins += 1;
        return "Human Won! Rock beats scissors.";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        computerWins += 1;
        return "Computer Won! Rock beats scissors.";
      } else {
        humanWins += 1;
        return "Human Won! Scissors beat paper.";
      }
    } else {
      return "Choice out of bounds.";
    }
}

function playGame() {
  if (humanWins >= 5) {
    winCondition = true;
    action.textContent = 'Human wins the game! Click Reset to play again.';
  } else if (computerWins >= 5) {
    winCondition = true;
    action.textContent = 'Computer wins the game! Click Reset to play again.';
  }

  if (winCondition === true) {
    for(i = 0; i < inputUserChoice.length; i++) {
      inputUserChoice[i].disabled = true;
    }
    
    reset.style.display = 'inline-block';

  }
};
