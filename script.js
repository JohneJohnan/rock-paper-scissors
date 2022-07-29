game()

function getPlayerChoice() {
    while (true) {
        const playerChoise = prompt("What do you pick? Rock? Paper? or Scissors?").toLowerCase()

        if (playerChoise != 'rock' && playerChoise != 'paper' && playerChoise != 'scissors') {
            alert("You have to choose between 'rock', 'paper' and 'scissors'!")
            continue
        }
        else return playerChoise
    }
}

function getComputerChoice() {
    const numberFrom0to2 = Math.floor(Math.random() * 3)

    if (numberFrom0to2 == 0)
        return 'rock'
    if (numberFrom0to2 == 1)
        return 'paper'
    else
        return 'scissors'
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        alert(`Draw! both played ${computerSelection}.`)
        return 0
    }
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        alert("You win! Paper beats rock.")
        return 1
    }
    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        alert("You lose! Rock beats scissors.")
        return -1
    }
    if (computerSelection == 'paper' && playerSelection == 'rock') {
        alert("You lose! Paper beats rock.")
        return -1
    }
    if (computerSelection == 'paper' && playerSelection == 'scissors') {
        alert("You win! Scissors beats paper.")
        return 1
    }
    if (computerSelection == 'scissors' && playerSelection == 'rock') {
        alert("You win! Rock beats scissors")
        return 1
    }
    if (computerSelection == 'scissors' && playerSelection == 'paper') {
        alert("You lose! Scissors beats paper.")
        return -1
    }
}

function alertResult(count) {
    if (count > 0)
        alert("You won the game!")
    else if (count == 0)
        alert('The game is a draw!')
    else
        alert("You lost the game!")
}

function game() {
    let count = 0
    for (let i = 5; i > 0; i--) {
        count += playRound(getComputerChoice(), getPlayerChoice())
    }
    alertResult(count)
}