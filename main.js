var Scissors = document.getElementById('Scissors').addEventListener("click", run);
var Rock = document.getElementById('Rock').addEventListener("click", run);
var Paper = document.getElementById('Paper').addEventListener('click', run);


var computerChoice;
var playerChoice;

var player = document.getElementById('player');
var computer = document.getElementById('computer');
var outcome = document.getElementById('outcome');

function run() {
  	playerChoice = this.innerText;
  	computerGamble();
  	compare();
}

function computerGamble() {
  	var dice = Math.random();
	if (dice <= 0.33) {
		computerChoice = "Rock";
    } else if (dice > 0.33 && dice <= 0.66) {
    	computerChoice = "Paper";
    } else {
    	computerChoice = "Scissors";
    }
 }
 
 function compare() {
 	player.innerHTML = "You have chosen " + playerChoice;
 	computer.innerHTML = "Computer chooses " + computerChoice;

 	if (playerChoice === computerChoice) {
 		outcome.innerHTML = "Tie game!";
 		
 	} else if (playerChoice === 'paper' && computerChoice === 'rock') {
 		outcome.innerHTML = "You won !";
 	} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
 		outcome.innerHTML = "You won !";
 	

 	} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
 		outcome.innerHTML = "You won !";
 	} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
 		outcome.innerHTML = "Defeat!";


 	} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
 		outcome.innerHTML = "Defeat!";
 	} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
 		outcome.innerHTML = "You won !";
 	}
 }
