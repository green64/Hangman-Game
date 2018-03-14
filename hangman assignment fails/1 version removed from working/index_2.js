// On load function
var challengeWordElement = document.getElementById("challenge-word");
var guessesElement = document.getElementById("guesses");
var wordBank = [
    {
      text: "ariel",
      img:  "assets/images/ariel.jpg",
    },
    {
      text: "tom",
      img:  "assets/images/tom.jpg",
    },
    {
      text: "patrick",
      img:  "assets/images/patrick.png",
    },
    {
      text: "bart",
      img:  "assets/images/bart.png",
    },
    {
      text: "stimpy",
      img:  "assets/images/stimpy.png",
    }
  ];
var userKeys = [];
var hangmanProgress = [];
var random = [Math.floor(Math.random() * wordBank.length)];
var challengeWord = wordBank[random];
var blankSpace = "_";
var guessesLeft = 0;
var guessesLeftElement = document.getElementById("guesses-left");
var scoreChecker = 0;
var solution = document.getElementById("solution");
var loss = document.getElementById("loss");
var win = document.getElementById("win");
var resetButton = document.getElementById("reset");
var winCountElement = document.getElementById("win-count");
var lossCountElement = document.getElementById("loss-count");
var getWinPic = document.getElementById("challenge-pic");
var lossCount = 0;
var winCount = 0;

function load() {
    guessesLeft = 7;
    guessesLeftElement.innerHTML = guessesLeft;

    for (i = 0; i < challengeWord.length; i++) {
        hangmanProgress.push(blankSpace);
    }

    challengeWordElement.innerHTML = hangmanProgress.join(" ");
    console.log(hangmanProgress);


    lossCountElement.innerHTML = lossCount;
    winCountElement.innerHTML = winCount;
    hide(getWinPic);
};

// Run load function
load();


// On key press
document.onkeyup = function (event) {
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
    if (guessesLeft < 5 && guessesLeft > 3) {
        show(normalGif);
    } else if (guessesLeft < 2 && guessesLeft > 0) {
        show(normalGif);
    } else if (guessesLeft == 0) {
        solution.innerHTML = challengeWord.text;
        solution.style.color = "red";
        lossCount += 1;
        lossCountElement.innerHTML = lossCount;

        show(loss);
        show(resetButton);

    }


    // If word answered is correct
    if (challengeWord == hangmanProgress.join("")) {
        challengeWordElement.style.color = "blue";
        winCount += 1;
        winCountElement.innerHTML = winCount;
        show(win);
        show(resetButton);
        hide(normalGif);
        show(getWinPic);

    }

};


// Reset function
function reset() {
    guessesLeft = 7;
    challengeWord.text = "";
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

    show(normalGif);
    hide(win);
    hide(loss);

    solution.innerHTML = "";
    console.log(hangmanProgress);

}
// reset on button click
resetButton.onclick = function () {
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
