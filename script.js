let choices = ['Rock', 'Paper', 'Scissors']
let randomComputerChoice

function getComputerChoice(arrayOfChoices) {
    if (arrayOfChoices.length == 0 || arrayOfChoices.length > 3) return
    const nbrOfChoices = 3
    randomComputerChoice = Math.floor(Math.random() * nbrOfChoices)
    return arrayOfChoices[randomComputerChoice]
}

