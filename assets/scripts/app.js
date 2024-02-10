var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var body = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColorFromArray();
var colorDisplay = document.querySelector("#color-display");
var resultDisplay = document.querySelector("#messageDisplay");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var themeToggleButton = document.querySelector(".theme-toggle");
var theme = false;

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
        reset();
    })
}

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        // compare the color of the clicked square with the color that was picked
        var clickedColor = this.style.backgroundColor;
        if (clickedColor !== pickedColor) {
            if (!theme) {
                this.style.backgroundColor = "#303d44";
            } else {
                this.style.backgroundColor = "whitesmoke";
            }
            resultDisplay.textContent = "NO";
        } else {
            changeColor(pickedColor);
            resultDisplay.textContent = "YES";
            resetButton.textContent = "Play again?";
        }
    });
};

resetButton.addEventListener("click", function () {
    reset();
});

themeToggleButton.addEventListener("click", function () {
    toggleTheme();
});


function reset() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickRandomColorFromArray();
    colorDisplay.textContent = pickedColor;

    resultDisplay.textContent = "";
    resetButton.textContent = "New Colors";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}


function changeColor(color) {
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;
    }
};

function generateRandomColors(num) {
    var rgbColor = [];
    for (var i = 0; i < num; i++) {
        rgbColor.push(generateRGBColor());
    }
    return rgbColor;
};

function generateRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgbColor;
};

function pickRandomColorFromArray() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

function toggleTheme() {
    if (!theme) {
        body.style.backgroundColor = "#303d44";
        body.style.color = "whitesmoke";
        resultDisplay.style.color = "whitesmoke";

    } else {
        body.style.backgroundColor = "whitesmoke";
        body.style.color = "#303d44";
        resultDisplay.style.color = "#303d44";
    }
    theme = !theme;
}