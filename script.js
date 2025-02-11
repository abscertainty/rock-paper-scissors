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



