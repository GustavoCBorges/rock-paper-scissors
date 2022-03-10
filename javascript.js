const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

let computerSelection

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3)
    if (randomNumber == 0) {
        computerSelection = rock
    } else if (randomNumber == 1) {
        computerSelection = paper
    } else {
        computerSelection = scissors
    }
}

console.log(computerPlay())

function playRound() {
    const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase()
    computerPlay()
    console.log(`You choose ${playerSelection} and...`)
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case rock:
                console.log("it's a draw!")
                break
            case paper:
                console.log("you lose! Paper beats rock")
                break
            case scissors:
                console.log("you win! Rock beats paper")
                break
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case rock:
                console.log("you win! Paper beats rock")
                break
            case paper:
                console.log("it's a draw!")
                break
            case scissors:
                console.log("you lose! Scissors beats paper")
                break
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case rock:
                console.log("you lose! Rock beats scissors")
                break
            case paper:
                console.log("you win! Scissors beats paper")
                break
            case scissors:
                console.log("it's a draw!")
        }
    } else {
        console.log("well...you have to chose rock, paper or scissors...")
    }
}