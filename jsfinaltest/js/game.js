var theBody = document.getElementById("theBody"), // the body!
    theLeftSide, // left column
    theRightSide, // right column
    smile, // <img> - Range from 0 to 400;
    faces, // Level
    imgCheck, // Find all images
    lastImg, // The last image
    IO = true, // Start the game!
    host = window.location, // currenct url
    audio;

theLeftSide = document.getElementById("leftSide");
theRightSide = document.getElementById("rightSide");
imgCheck = document.getElementsByTagName("img");
faces = 5;

/* Initialize Smiles */

function generateFaces() {
    var initialFaces = 0;
    while (initialFaces < faces) {
        generateSmile();
        initialFaces++;
    }
}

function randomize(number) {
    floatNumber = Math.random() * number;
    integerNumber = Math.floor(floatNumber);
    return integerNumber + "px";
}

function generateSmile() {
    var smile = document.createElement("img");
    smile.src ="img/smile.png";
    theLeftSide.appendChild(smile);
    smile.style.left = randomize(400);
    smile.style.top = randomize(400);
    smile.style.width = 100 + "px";
}

/* Right column copying */

function copyNode() {
    var node,
        countNodes = 0;
    while (theLeftSide.childNodes.length > countNodes) {
        node = theLeftSide.childNodes[countNodes].cloneNode(true);
        theRightSide.appendChild(node);
        countNodes++;
    }
    theLeftSide.lastChild.remove(); //delete smile from left
    return true;
}

/* The game is begin! */
function countImages() {
    var imgs = document.getElementsByTagName("img");
    lastImg = theRightSide.lastChild;

    for (i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", wrong, false);
        //console.log(imgs[i]); //Debug
    }
    lastImg.removeEventListener("click", wrong, false);
    lastImg.addEventListener("click", correct, false);
}

var wrong = function(event) {
    if (IO == true) {
        alert("Game Over!");
        audio = new Audio('js/gnomas.mp3');
        audio.play();
        lastImg.style.background = "red"; // show the correct answer
        document.getElementById("pt").innerHTML = translate("score") + (faces - 5) + "!";
        nextLevel(false);
        event.stopPropagation();
    }

    else {
        start();
        theLeftSide.addEventListener("click", playAgain, false);
        theRightSide.addEventListener("click", playAgain, false)
    }

}

var correct = function(event) {
    nextLevel(true);
    audio = new Audio('js/sound.mp3');
    audio.play();
}

function nextLevel(bool) {
    if (bool == true) { // if your answer is correct
        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }

        faces += 5;
        start();
    }

    else {
        IO = false;
        theRightSide.lastChild.removeEventListener("click", correct, false);
        theRightSide.lastChild.addEventListener("click", playAgain, false);
    }

}

function start() {
    if (IO == true) {
        generateFaces();
        copyNode();
        countImages();
    }
    else {
        playAgain;
    }
}

var playAgain = function() {
    var ask = confirm(translate("refresh"));
    if (ask == true)
        window.location.href = host;
}

function facebook() {
    window.location.href="https://www.facebook.com/sharer/sharer.php?u="+host
}
