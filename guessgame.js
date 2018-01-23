var num = Math.floor(((Math.random()* 10) + 1));
var guess = prompt("Guess a number between 1 and 10!");
var guessNum = parseInt(guess);

function guessTheNum() {
	if (guess > num) {
		alert("Too high!");
		guessAgain();
	}
	else if (guess < num) {
		alert("Too low!");
		guessAgain();
	}
}

function guessAgain() {
	guess = prompt("Guess again!");
	if (guess !== num) {
	guessTheNum();
	}
}

guessTheNum();


alert("It was " + num + "!");

