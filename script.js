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
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else {
        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'scissors') {
                    console.log("You Win! Rock beats Scissors.");
                    humanScore++;
                } else if (computerChoice === 'paper') {
                    console.log("You Lose! Paper beats Rock.");
                    computerScore++
                }
                break;
            case 'paper':
                if (computerChoice === 'scissors') {
                    console.log("You Lose! Scissors beat Paper.");
                    computerScore++;
                } else if (computerChoice === 'rock') {
                    console.log("You Win! Paper beats Rock.");
                    humanScore++
                }
                break;
            case 'scissors':
                if (computerChoice === 'rock') {
                    console.log("You Lose! Rock beat Scissors.");
                    computerScore++;
                } else if (computerChoice === 'paper') {
                    console.log("You Win! Scissors beats Paper.");
                    humanScore++
                }
                break;
        }
    }
}

const choicesDiv = document.querySelector('.choices');
choicesDiv.addEventListener('click', sendChoiceByHuman);

function sendChoiceByHuman(eventInfo) {
    playRound(eventInfo.target['id'], getComputerChoice(choices));
}



