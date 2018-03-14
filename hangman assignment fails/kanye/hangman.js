	// declare variables
	var challengeWordElement = document.getElementById("challenge-word");
	var guessesElement = document.getElementById("guesses");
	var wordBank = ["power", "runaway", "champion", "president", "major", "backpack", "diamonds", "pablo", "college", "north", "graduation", "fantasy", "heartbreak", "chicago", "stronger"];
	var userKeys = [];
	var hangmanProgress = [];
	var random = Math.floor(Math.random() * wordBank.length);
	var challengeWord = wordBank[random];
	var blankSpace = "_";
	var guessesLeft = 0;
	var guessesLeftElement = document.getElementById("guesses-left");
	var scoreChecker = 0;
	var normalGif = document.getElementById("normal-kanye");
	var concernedGif = document.getElementById("conerned-kanye");
	var angryGif = document.getElementById("angry-kanye");
	var wtfGif = document.getElementById("wtf-kanye");
	var celebrateGif = document.getElementById("celebrate-kanye");
	var solution = document.getElementById("solution");
	var loss = document.getElementById("loss");
	var win = document.getElementById("win");
	var resetButton = document.getElementById("reset");
	var winCountElement = document.getElementById("win-count");
	var lossCountElement = document.getElementById("loss-count");
	var winSound = document.getElementById("winning-sound");
	var lossCount = 0;
	var winCount = 0;
	
	
	// On load function
	function load() {
	guessesLeft = 7;
	guessesLeftElement.innerHTML = guessesLeft;
	
	for (i = 0; i < challengeWord.length; i++) {
	hangmanProgress.push(blankSpace);
	}
	
	challengeWordElement.innerHTML = hangmanProgress.join(" ");
	console.log(hangmanProgress);
	
	show(normalGif);
	
	lossCountElement.innerHTML = lossCount;
	winCountElement.innerHTML = winCount;
	};
	
	// Run load function
	load();
	
	
	// On key press
	document.onkeyup = function(event) {
	console.log(event.key);
	console.log(challengeWord);
	
	// If key is within lowercase alphabet
	if (event.keyCode < 91 && event.keyCode > 64) {
	
	if (userKeys.includes(event.key)) {
	// do nothing
	} else {
	// add keys to display array
	userKeys.push(event.key);
	guessesElement.innerHTML = userKeys.join(" ");
	
	};
	
	// Check against chosen word
	for (i = 0; i < challengeWord.length; i++) {
	if (event.key === challengeWord[i]) {
	hangmanProgress[i] = event.key;
	challengeWordElement.innerHTML = hangmanProgress.join(" ");
	
	console.log(hangmanProgress);
	} else {
	scoreChecker++;
	}
	
	};
	
	// if no keys match lose one guessesLeft
	if (scoreChecker === challengeWord.length) {
	guessesLeft -= 1;
	guessesLeftElement.innerHTML = guessesLeft;
	console.log(guessesLeft);
	}
	
	};
	
	scoreChecker = 0;
	// Guesses left gif states
	if (guessesLeft == 0) {
	solution.innerHTML = challengeWord;
	solution.style.color = "red";
	lossCount += 1;
	lossCountElement.innerHTML = lossCount;
	show(loss);
	show(resetButton);
	
	}
	
	
	// If word answered is correct
	if (challengeWord == hangmanProgress.join("")) {
	challengeWordElement.style.color = "green";
	winCount += 1;
	winCountElement.innerHTML = winCount;
	show(win);
	show(resetButton);
	
	}
	
	};
	
	// Reset function
	function reset() {
	guessesLeft = 7;
	challengeWord = "";
	hangmanProgress = [];
	userKeys = [];
	guessesLeftElement.innerHTML = guessesLeft;
	random = Math.floor(Math.random() * wordBank.length);
	challengeWord = wordBank[random];
	for (i = 0; i < challengeWord.length; i++) {
	hangmanProgress.push(blankSpace);
	}
	
	challengeWordElement.innerHTML = hangmanProgress.join(" ");
	guessesElement.innerHTML = userKeys.join(" ");
	challengeWordElement.style.color = "black";
	winSound.pause();
	
	show(normalGif);
	hide(concernedGif);
	hide(angryGif);
	hide(wtfGif);
	hide(celebrateGif);
	hide(win);
	hide(loss);
	
	solution.innerHTML = "";
	console.log(hangmanProgress);
	
	}
	// reset on button click
	resetButton.onclick = function() {
	reset();
	hide(resetButton);
	}
	
	
	// show
	function show(image) {
	image.style.display = "inline";
	}
	
	// hide
	function hide(image) {
	image.style.display = "none";
	}
	