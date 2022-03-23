function computerPlay() {
    const computerOptions = ["rock","paper","scissors"]
    const random = Math.floor(Math.random() * computerOptions.length)
    return computerOptions[random]
}

function playRound() {
    const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase()
    const computerSelection = computerPlay()
    console.log(`You choose ${playerSelection} and...`)
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                return ("it's a draw!")
                break
            case "paper":
                return ("you lose! Paper beats rock")
                break
            case "scissors":
                return ("you win! Rock beats scissors")
                break
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                return ("you win! Paper beats rock")
                break
            case "paper":
                return ("it's a draw!")
                break
            case "scissors":
                return ("you lose! Scissors beats paper")
                break
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                return ("you lose! Rock beats scissors")
                break
            case "paper":
                return ("you win! Scissors beats paper")
                break
            case "scissors":
                return ("it's a draw!")
        }
    } else {
        return ("well...you have to chose rock, paper or scissors...")
    }
}