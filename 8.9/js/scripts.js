// exercise 8.9  Loops

// Basic function draw skew christmas tree
function drawSkewChristmasTree(size) {
    console.log(size < 1 ? "No Christmas, No Tree!!!": "Skew Christmas Tree");
    var star = "*";
    for (var i = 1; i <= size; i++) {
        console.log(star);
        star += "**";
    }
}

// Helper function
function addSpacesOrStars(num, spaceOrStar) {
    var string = "";
    for (var i = 0; i < num; i++) {
        string += spaceOrStar;
    }
    return string;
}

// Draw straight christmas tree
function drawStraightChristmasTree(size) {
    console.log(size < 1 ? "No Christmas, No Tree!!!": "Straight Christmas Tree");
    var star;
    for (var i = 1; i <= size; i++) {
        star = "";
        star += addSpacesOrStars(size - i, " ");
        star += addSpacesOrStars(i * 2 - 1, "*");

        console.log(star);
    }
}

drawSkewChristmasTree(5);
console.log(""); // spacer
drawStraightChristmasTree(6);
