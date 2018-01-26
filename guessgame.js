var num = Math.floor(((Math.random()* 10) + 1));
var guess = prompt("Guess a number between 1 and 10!");
var guessNum = parseInt(guess);
var tries = [guessNum];

function guessTheNum() {
	if (guess > num) {
		for (var i = 0; i < guess.length; i++) {
			(tries.push(guess) + (i + 1));
		}
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

alert("You guessed " + tries.length + " time(s)!");
