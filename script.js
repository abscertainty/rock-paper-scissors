let choices = ['rock', 'paper', 'scissors']
let computerScore = 0
let humanScore = 0

function getComputerChoice(arrayOfChoices) {
    if (arrayOfChoices.length == 0 || arrayOfChoices.length > 3) return
    const nbrOfChoices = 3
    let randomComputerChoice = Math.floor(Math.random() * nbrOfChoices)
    return arrayOfChoices[randomComputerChoice]
}

function playRound(humanChoice, computerChoice) {
    const ROUND_RESULT_PREFIX = 'Round Result: ';

    const roundResultPara = document.querySelector('.round-result');
    const runningScorePara = document.querySelector('.running-score');

    if (humanChoice === computerChoice) {
        roundResultPara.textContent = ROUND_RESULT_PREFIX + "It's a draw!";
    } else {
        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'scissors') {
                    roundResultPara.textContent = ROUND_RESULT_PREFIX + "Round Won! Rock beats Scissors.";
                    humanScore++;
                } else if (computerChoice === 'paper') {
                    roundResultPara.textContent = ROUND_RESULT_PREFIX + "Round Lost! Paper beats Rock.";
                    computerScore++
                }
                break;
            case 'paper':
                if (computerChoice === 'scissors') {
                    roundResultPara.textContent = ROUND_RESULT_PREFIX + "Round Lost! Scissors beat Paper.";
                    computerScore++;
                } else if (computerChoice === 'rock') {
                    roundResultPara.textContent = ROUND_RESULT_PREFIX + "Round Won! Paper beats Rock.";
                    humanScore++
                }
                break;
            case 'scissors':
                if (computerChoice === 'rock') {
                    roundResultPara.textContent = ROUND_RESULT_PREFIX + "Round Lost! Rock beat Scissors.";
                    computerScore++;
                } else if (computerChoice === 'paper') {
                    roundResultPara.textContent = ROUND_RESULT_PREFIX + "Round Won! Scissors beats Paper.";
                    humanScore++
                }
                break;
        }
    }

    runningScorePara.textContent = `You ${humanScore} - ${computerScore} Computer`;

    if (humanScore >= 5 || computerScore >= 5) announceWinnerAndEndGame();
}

const choicesDiv = document.querySelector('.choices');
choicesDiv.addEventListener('click', getHumanChoice);

function getHumanChoice(eventInfo) {
    playRound(eventInfo.target['id'], getComputerChoice(choices));
}

function announceWinnerAndEndGame() {
    let resultText = '';
    const resultPara = document.createElement('p');
    const scoresDiv = document.querySelector('.scores');

    if (humanScore > computerScore) {
        resultText += 'You Win! ';
        resultPara.style.cssText = 'color: #58f60f;';
    } else {
        resultText += 'You Lose! ';
        resultPara.style.cssText = 'color: #e1071d';
    }

    resultPara.textContent = resultText;
    resultPara.classList.add('result-text');
    scoresDiv.removeChild(scoresDiv.firstElementChild);
    scoresDiv.insertBefore(resultPara, scoresDiv.firstChild);

    choicesDiv.removeEventListener('click', getHumanChoice);

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(disableButton);
}

function disableButton(btn) {
    btn.classList.remove('btn');
    btn.classList.add('inactive-button');
}



