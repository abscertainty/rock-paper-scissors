let choices = ['Rock', 'Paper', 'Scissors']
let randomComputerChoice
let promptedHumanChoice
let computerScore = 0
let humanScore = 0

function getComputerChoice(arrayOfChoices) {
    if (arrayOfChoices.length == 0 || arrayOfChoices.length > 3) return
    const nbrOfChoices = 3
    randomComputerChoice = Math.floor(Math.random() * nbrOfChoices)
    return arrayOfChoices[randomComputerChoice]
}

function getHumanChoice(arrayOfChoices) {
    while(1) {
        promptedHumanChoice = parseInt(prompt("Enter 1, 2 or 3 to choose Rock, Paper or Scissors respectively!"))
        if (
            !isNaN(promptedHumanChoice) && 
            promptedHumanChoice >= 1 && 
            promptedHumanChoice <= 3
        ) {
            break
        }
    }
    return promptedHumanChoice - 1
}

getHumanChoice(choices)


