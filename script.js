// function getPlayerChoice() {
//     while (true) {
//         const playerChoise = prompt("What do you pick? Rock? Paper? or Scissors?").toLowerCase()

//         if (playerChoise != 'rock' && playerChoise != 'paper' && playerChoise != 'scissors') {
//             alert("You have to choose between 'rock', 'paper' and 'scissors'!")
//             continue
//         }
//         else return playerChoise
//     }
// }

function getComputerChoice() {
    const numberFrom0to2 = Math.floor(Math.random() * 3)

    if (numberFrom0to2 == 0)
        return 'rock'
    if (numberFrom0to2 == 1)
        return 'paper'
    else
        return 'scissors'
}

// function alertResult(count) {
//     if (count > 0)
//         return "You won the game!";
//     else if (count == 0)
//         return 'The game is a draw!';
//     else
//         return "You lost the game!";
// }

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) 
        return [0, `Draw! both played ${computerSelection}.`];
    
    if (computerSelection == 'rock' && playerSelection == 'paper') 
        return [1, "You win! Paper beats rock."];
    
    if (computerSelection == 'rock' && playerSelection == 'scissors') 
        return [-1, "You lose! Rock beats scissors."];
    
    if (computerSelection == 'paper' && playerSelection == 'rock') 
        return [-1, "You lose! Paper beats rock."];
    
    if (computerSelection == 'paper' && playerSelection == 'scissors') 
        return [1, "You win! Scissors beats paper."];
    
    if (computerSelection == 'scissors' && playerSelection == 'rock') 
        return [1, "You win! Rock beats scissors"];
    
    if (computerSelection == 'scissors' && playerSelection == 'paper') 
        return [-1, "You lose! Scissors beats paper."];
    
    return `ERROR! computer:${computerSelection} player:${playerSelection}`;
}

//create buttons and divs using js DOM methods instead of html to learn js dom manipulation
function makeDOMComponents() {
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";

    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("style", "white-space:pre;");
    document.body.append(rockBtn,paperBtn,scissorsBtn,resultDiv);
}

function clickButtonHelp(e, resultDivision, count) {
    const result = playRound(getComputerChoice(), e.target.textContent.toLowerCase());
    resultDivision.textContent = result[1] + "\r\nyour score: " + (count + result[0]);
    return count + result[0];
}

function addEventsAndLogic() {
    let count = 0;
    const resultDivision = document.querySelector("div");

    document.querySelectorAll("button").forEach(Btn => {
        Btn.addEventListener("click", function(event) {
            count = clickButtonHelp(event, resultDivision, count);

            if (count == 5) {
                resultDivision.textContent += "\r\nYou won the game!\r\nThe scores are reset now!";
                count = 0;
            }
            if (count == -5) {
                resultDivision.textContent += "\r\nYou lost the game!\r\nThe scores are reset now!";
                count = 0;
            }
        });
    });
}

function game() {
    makeDOMComponents();
    addEventsAndLogic();
}

game();