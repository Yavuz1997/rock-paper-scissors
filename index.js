function computerPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    }
    if (randomChoice === 1) {
        return "paper";
    }
    if (randomChoice === 2) {
        return "scissors";
    }
    return "Something went wrong :(";
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener("click", clicked);
paper.addEventListener("click", clicked);
scissors.addEventListener("click", clicked);
const cRock = document.querySelector("#cRock");
const cPaper = document.querySelector("#cPaper");
const cScissors = document.querySelector("#cScissors");

function clicked() {
    switch (this.id) {
        case "rock":
            rock.classList.add("clicked");
            paper.classList.remove("clicked");
            scissors.classList.remove("clicked");
            break;
        case "scissors":
            rock.classList.remove("clicked");
            paper.classList.remove("clicked");
            scissors.classList.add("clicked");
            break;
        case "paper":
            rock.classList.remove("clicked");
            paper.classList.add("clicked");
            scissors.classList.remove("clicked");
            break;
    }
}

const button = document.querySelector("#play");
const reset = document.querySelector("#reset");
let playerScore = 0;
let computerScore = 0;
let gameRound = 1;
button.addEventListener("click", playGame);
reset.addEventListener("click", resetGame);

function resetGame(){
    location.reload();
}

function playGame() {
    if (gameRound == 6){
        resetGame();
        return;
    }
    let currentRound = document.querySelector("#gameOne");
    switch (gameRound) {
        case 2: currentRound = document.querySelector("#gameTwo");
            console.log("im here");
            break;
        case 3: currentRound = document.querySelector("#gameThree");
            break;
        case 4: currentRound = document.querySelector("#gameFour");
            break;
        case 5: currentRound = document.querySelector("#gameFive");
            break;
        default:
            break;
    }
    const playerTable = document.createElement('td');
    const compTable = document.createElement('td');


    let playerChoice = "";
    if (rock.getAttribute("class") == "clicked") {
        playerChoice = "rock";
    }
    if (paper.getAttribute("class") == "clicked") {
        playerChoice = "paper";
    }
    if (scissors.getAttribute("class") == "clicked") {
        playerChoice = "scissors";
    }
    if (playerChoice == "") return;
    let computerChoice = computerPlay();
    while (computerChoice == playerChoice) {
        computerChoice = computerPlay();
    }
    cRock.style.animationName = "none";
    cPaper.style.animationName = "none";
    cScissors.style.animationName = "none";
    if (computerChoice == "rock") {
        cRock.classList.add("clicked");
        cScissors.classList.remove("clicked");
        cPaper.classList.remove("clicked");
    }
    if (computerChoice == "paper") {
        cRock.classList.remove("clicked");
        cScissors.classList.remove("clicked");
        cPaper.classList.add("clicked");
    }
    if (computerChoice == "scissors") {
        cRock.classList.remove("clicked");
        cScissors.classList.add("clicked");
        cPaper.classList.remove("clicked");
    }
    switch (playerChoice) {
        case "rock":
            if(computerChoice == "paper"){
                playerTable.textContent = "Lost";
                compTable.textContent = "Won";
                document.getElementById("result").innerHTML = "Computer Won The Round! :(";
                document.getElementById("hand").innerHTML = "Paper beats Rock";
                computerScore += 1;
            }
            if(computerChoice == "scissors"){
                playerTable.textContent = "Won";
                compTable.textContent = "Lost";
                document.getElementById("result").innerHTML = "You Won The Round! :)";
                document.getElementById("hand").innerHTML = "Rock beats Scissors";
                playerScore += 1;
            }
            break;
        case "paper":
             if(computerChoice == "rock"){
                playerTable.textContent = "Won";
                compTable.textContent = "Lost";
                document.getElementById("result").innerHTML = "You Won The Round! :)";
                document.getElementById("hand").innerHTML = "Paper beats Rock";
                playerScore += 1;
            }
            if(computerChoice == "scissors"){
                playerTable.textContent = "Lost";
                compTable.textContent = "Won";
                document.getElementById("result").innerHTML = "Computer Won The Round! :(";
                document.getElementById("hand").innerHTML = "Scissors beats Paper";
                computerScore += 1;
            }
            break;
        case "scissors":
             if(computerChoice == "rock"){
                playerTable.textContent = "Lost";
                compTable.textContent = "Won";
                document.getElementById("result").innerHTML = "Computer Won The Round! :(";
                document.getElementById("hand").innerHTML = "Rock beats Scissors";
                computerScore += 1;
            }
            if(computerChoice == "paper"){
                playerTable.textContent = "Won";
                compTable.textContent = "Lost";
                document.getElementById("result").innerHTML = "You Won The Round! :)";
                document.getElementById("hand").innerHTML = "Scissors beats Paper";
                playerScore += 1;
            }
            break;
    }

    
    document.getElementById("score").innerHTML = "Player: " +playerScore +" | Computer: "+ computerScore;
    currentRound.appendChild(playerTable);
    currentRound.appendChild(compTable);
    if(gameRound == 5){
        if(computerScore > playerScore){
            document.getElementById("result").innerHTML = "Computer Won The Game! :(";
        }
        if(playerScore > computerScore){
            document.getElementById("result").innerHTML = "You Won The Game! :)";
        }
    }
    gameRound += 1;
    
}