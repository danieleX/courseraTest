/*
**  1. Pensa ad un numero da 1 a 100 random
**  2. Chiedi il numero al giocatore
**      ├ Non è un numero? -> Torna indietro al punto 2
**      ├ Non è tra 1 o 100? -> Torna al punto 2
**      ├ E' più piccolo di 1? -> Troppo piccolo! -> Torna al punto 2
**      ├ E' troppo grande? -> Troppo grande! -> Torna al punto 2
**  3. Ce l'hai fatta!
*/

var target,
    guess_input_text,
    guess_input,
    finished = false,
    guesses = 0;

function doGame() {
    var random_number = Math.random() * 100;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer + 1;
    while (!finished) {
        guess_input_text = prompt ("I am thinking of a number " +
                                   "in the range 1 to 100. \n\n " +
                                   "What is the number?");
        guess_input = parseInt(guess_input_text);
        guesses +=1;
        finished = checkGuess();
    }
}

function checkGuess() {
    if (isNaN(guess_input)) {
        alert("Not a number, try again");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)) {
        alert("Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if (guess_input > target) {
        alert("Number is too large");
        return false;
    }
    if (guess_input < target) {
        alert("Number is too small");
        return false;
    }
    alert("You got it! the number was " + target + "!");
    return true;
}
