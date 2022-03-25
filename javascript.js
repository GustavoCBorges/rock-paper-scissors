const choose = document.querySelector('#choose');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const gameOver = document.querySelector('#gameOver');
const replay = document.querySelector('#replay');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;

score.textContent = `${playerScore} X ${computerScore}`;

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (playerScore != 5 && computerScore != 5) {
            playRound(e.target.id, computerPlay());
        } else {
            playAgain();
        }
    });
});

function computerPlay() {
    const computerOptions = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random];
}

function playRound(playerSelection,computerSelection) {
    choose.textContent = `You choose ${playerSelection} and...`;
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "it's a draw!";
                break;
            case "paper":
                result.textContent = "you lose! Paper beats rock";
                computerScore += 1;
                score.textContent = `${playerScore} X ${computerScore}`;
                break;
            case "scissors":
                result.textContent = "you win! Rock beats scissors";
                playerScore += 1;
                score.textContent = `${playerScore} X ${computerScore}`;
                break;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "you win! Paper beats rock";
                playerScore += 1;
                score.textContent = `${playerScore} X ${computerScore}`;
                break;
            case "paper":
                result.textContent = "it's a draw!";
                break;
            case "scissors":
                result.textContent = "you lose! Scissors beats paper";
                computerScore += 1;
                score.textContent = `${playerScore} X ${computerScore}`;
                break;
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock":
                result.textContent = "you lose! Rock beats scissors";
                computerScore += 1;
                score.textContent = `${playerScore} X ${computerScore}`;
                break;
            case "paper":
                result.textContent = "you win! Scissors beats paper";
                playerScore += 1;
                score.textContent = `${playerScore} X ${computerScore}`;
                break;
            case "scissors":
                result.textContent = "it's a draw!";
        }
    }
    checkScore()
}

function checkScore() {
    if (playerScore == 5 || computerScore == 5) {
        choose.classList.toggle('invisible');
        result.classList.toggle('invisible');
        replay.classList.toggle('invisible');
        rock.classList.toggle('invisible');
        paper.classList.toggle('invisible');
        scissors.classList.toggle('invisible');
        (playerScore > computerScore) ? gameOver.textContent = 'You won!' : gameOver.textContent = 'You lost...';
    }
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    choose.textContent = '';
    result.textContent = '';
    score.textContent = `${playerScore} X ${computerScore}`;
    gameOver.textContent = '';

    choose.classList.toggle('invisible');
    result.classList.toggle('invisible');
    replay.classList.toggle('invisible');
    rock.classList.toggle('invisible');
    paper.classList.toggle('invisible');
    scissors.classList.toggle('invisible');
}