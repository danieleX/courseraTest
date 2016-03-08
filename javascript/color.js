// Task 1

var colors = ["aqua", "aquamarine", "black", "blue", "brown","cyan", "green", "gold", "grey", "magenta", "orange", "purple"],
    randomIndex = Math.random() * colors.length,
    randomIndex = Math.floor(randomIndex), // Pick the random index!
    randomColor = colors[randomIndex], // Pick the random color!
    guess_input_text, // The string input
    guess_input, // The index of corresponding string into the array
    guessess = 0, // the answers
    finished = false; // Check if the script did his jobs!


function doGame() {
    "use strict";
    while (!finished) {
        guess_input_text = prompt ("I am thinking of one of these colors: \n\n" +
                                   String(colors + ". ") + "\n\n What is the color?");
        guess_input = colors.indexOf(guess_input_text);
        finished = checkGuess();
        guessess += 1;
    }
}

function checkGuess() {
    if (guess_input == -1) {
        alert("Sorry, I Don't recognize your color.");
        return false;
    }
    if (guess_input > -1 ) {

        if (guess_input > randomIndex) {
            alert(" Sorry, your guess is not correct! \n\n" +
                 "Hint: your color is alphabetically higher than mine. \n\n" +
                 "Please try again.");
            return false;
        }
        if (guess_input < randomIndex) {
            alert(" Sorry, your guess is not correct! \n\n" +
                 "Hint: your color is alphabetically lower than mine. \n\n" +
                 "Please try again.");
            return false;
        }
        alert("You got it! the color was " + colors[guess_input] + "!\n\n" +
             guessess + " guessess to finish this game!");
        document.getElementById("theBoss").style.background = colors[guess_input];
        return true;
    }

}
