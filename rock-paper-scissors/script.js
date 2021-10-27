function computerPlay(){
	const options = ['rock', 'paper', 'scissors'];
	return options[Math.floor(Math.random()*options.length)];
}
 
function playRound(playerSelection, computerSelection){
	if (playerSelection === computerSelection){
		console.log(`You and the computer played ${playerSelection}. It's a tie`);
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    console.log(`Computer played ${computerSelection}. You win!`);
  }
	else
		console.log(`Computer played ${computerSelection}. You lose.`);
}	
 
 
 
function game(){
	for (let i = 0; i < 5; i++){
		do {
			playerSelection = prompt('rock, paper or scissors','')
}
		while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors');
		playRound(playerSelection, computerPlay())
	}
 
}

