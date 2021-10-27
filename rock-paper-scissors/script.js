const OPTIONS = ['rock', 'paper', 'scissors'];
        
function computerPlay(){
	const randomIndex = Math.floor(Math.random()*OPTIONS.length)
	return OPTIONS[randomIndex];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		console.log(`You and the computer played ${playerSelection}. It's a tie`);
		return 'tie';
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
	) {
		console.log(`Computer played ${computerSelection}. You win!`);
		return 'user';
	} else {
		console.log(`Computer played ${computerSelection}. You lose.`);
		return 'computer';
	}
}

const buttons = document.querySelectorAll('button');

const buttonHandler = (button) => {
	// This was the first attempt
	// It was good but could be improved via x y z
	//
	// const firstOnClickFunction = () => { 
	//     const userScoreElement = document.querySelector('#user-score'); 
	//     const computerScoreElement = document.querySelector('#computer-score');

	//     const userScore = parseInt(userScoreElement.textContent);
	//     const computerScore = parseInt(computerScoreElement.textContent);

	//     const result = playRound(button.id, computerPlay())

	//     if (result === 'user') {
	//         userScoreElement.textContent = userScore + 1;
	//     } else if (result === 'computer') {
	//         computerScoreElement.textContent = computerScore + 1;
	//     }
	// };

	// This one runs a lot less code overall
	const onClickFunction = () => { 
		const result = playRound(button.id, computerPlay())
		if (result === 'tie') { 
			return 
		} else if (result === 'user') {
			const userScoreElement = document.querySelector('#user-score'); 
			const userScore = parseInt(userScoreElement.textContent);
			userScoreElement.textContent = userScore + 1;
		} else if (result === 'computer') {
			const computerScoreElement = document.querySelector('#computer-score');
			const computerScore = parseInt(computerScoreElement.textContent);
			computerScoreElement.textContent = computerScore + 1;
		}
	};
	button.addEventListener('click', onClickFunction);
}

buttons.forEach(buttonHandler)

