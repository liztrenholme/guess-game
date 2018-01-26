var num = Math.floor(((Math.random()* 10) + 1));
var guess = prompt("Guess a number between 1 and 10!");
var guessNum = parseInt(guess);
var tries = []; //creating an array to feed number of guesses into

function guessTheNum() {
	if (guess > num) { //adding high guesses into tries array
		for (var i = 0; i < guess.length; i++) {
			(tries.push(guess) + (i + 1));
		} 
		alert("Too high!");
		guessAgain();
	}
	else if (guess < num) { //adding low guesses into tries array
		for (var i = 0; i < guess.length; i++) {
			(tries.push(guess) + (i + 1));
		} 
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

guessTheNum(); //calling the function to start the game, which then calls guessAgain function within itself for as many times is as needed

if (guess === num) {
	alert("Hooray!  You got it!")
}

alert("It was " + num + "!" + " You guessed " + tries.length + " time(s), and " + tries + " were your guesses!"); 
//tells correct number, tells user how many guess they made, repeats back user's guesses

