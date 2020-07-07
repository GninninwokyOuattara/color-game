var winningColor;

var mainBar = document.querySelectorAll("#mainBar div");
console.log(mainBar);
var h1 = document.querySelector("h1");
var easy = document.querySelectorAll("#mainBar div")[2];
var hard = document.querySelectorAll("#mainBar div")[3];
var trHard = document.querySelectorAll("tr")[1];
var td = document.querySelectorAll("td");
var newColor = document.querySelectorAll("#mainBar div")[0];
var message = document.querySelectorAll("#mainBar div")[1];

var running = true;

newColor.addEventListener("click", function () {
    document.querySelectorAll(".container-fluid")[0].style.backgroundColor =
        "rgb(59, 118, 173)";
    running = true;
    resetMessageState();
    start();
});

easy.addEventListener("click", function () {
    if (running) {
        resetMessageState();
        this.classList.add("chosen");
        hard.classList.remove("chosen");
        trHard.classList.add("disable");
        start();
    }
});

hard.addEventListener("click", function () {
    if (running) {
        resetMessageState();
        this.classList.add("chosen");
        trHard.classList.remove("disable");
        easy.classList.remove("chosen");
        start();
    }
});

//METHODS
function random_rgb() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return "RGB(" + o(r() * s) + ", " + o(r() * s) + ", " + o(r() * s) + ")";
}

// function setRGB() {

//     winningColor = random_rgb();

//     for (var i = 0; i < td.length; i++) {
//         td[i].style.backgroundColor = winningColor;
//     }
// }

//MAIN GAME THINGY
for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function () {
        if (this.style.backgroundColor == winningColor.toLowerCase()) {
            for (var i = 0; i < td.length; i++) {
                td[i].style.backgroundColor = winningColor;
            }
            message.textContent = "Correct!";
            message.classList.remove("m-invisible");
            running = false;
            document.querySelectorAll(
                ".container-fluid"
            )[0].style.backgroundColor = winningColor;
        } else {
            this.style.backgroundColor = "#000000";
            message.classList.remove("m-invisible");
        }
    });
}

// start();

function start() {
    if (trHard.getAttribute("class") == "disable") {
        insertColor(3);
        td[Math.round(Math.random() * 2)].style.backgroundColor = winningColor;
    } else {
        insertColor(0);
        td[Math.round(Math.random() * 5)].style.backgroundColor = winningColor;
    }
}

// insert()
function insertColor(n) {
    winningColor = random_rgb();
    h1.innerHTML = winningColor;
    for (var i = 0; i < td.length - n; i++) {
        td[i].style.background = random_rgb();
    }
}

function resetMessageState() {
    message.classList.add("m-invisible");
    message.textContent = "Try again!";
}

start();
