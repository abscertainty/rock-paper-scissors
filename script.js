let choices = ['rock', 'paper', 'scissors']
let computerScore = 0
let humanScore = 0

function getComputerChoice(arrayOfChoices) {
    if (arrayOfChoices.length == 0 || arrayOfChoices.length > 3) return
    const nbrOfChoices = 3
    let randomComputerChoice = Math.floor(Math.random() * nbrOfChoices)
    return arrayOfChoices[randomComputerChoice]
}

function getHumanChoice(arrayOfChoices) {
    if (arrayOfChoices.length == 0 || arrayOfChoices.length > 3) return
    while(1) {
        let promptedHumanChoice = prompt("Choose Rock, Paper or Scissors!").toLowerCase().trim()
        for (let index = 0; index < arrayOfChoices.length; index++) {
            if (promptedHumanChoice === arrayOfChoices[index]) {
                return promptedHumanChoice
            }
        }
    }
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

playRound(getHumanChoice(choices), getComputerChoice(choices))



