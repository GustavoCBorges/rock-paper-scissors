function computerPlay() {
    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"

    let randomNumber = Math.floor(Math.random()*3)
    if (randomNumber == 0) {
        console.log(rock)
    } else if (randomNumber == 1) {
        console.log(paper)
    } else {
        console.log(scissors)
    }
}

function playRound() {

}