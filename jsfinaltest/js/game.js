var theLeftSide, // left column
    theRightSide, // right column
    smile, // <img> - Range from 0 to 400;
    faces, // Level
    imgCheck; // Find all images

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
    console.log(imgs.length);
    for (i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", wrong, false);
        console.log(imgs[i]);
    }
}

var wrong = function() {
    alert("ciao");
    event.stopPropagation();
}



//i= 0;
//while (document.getElementsByTagName("img"))
