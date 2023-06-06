var redBackground = document.getElementById("red-background");
var blueBackground = document.getElementById("blue-background");
var greenBackground = document.getElementById("green-background");
var redButton = document.getElementById("red-button");
var blueButton = document.getElementById("blue-button");
var greenButton = document.getElementById("green-button");
var resetButton = document.getElementById("reset-button");
var slider = document.getElementById("font-slider");
var text = document.getElementById("slider-text");
var counting = document.getElementById("counting");
var body = document.body;

redBackground.addEventListener("click", function () {
    body.style.backgroundColor = "hsl(0, 70%, 90%)";
});

blueBackground.addEventListener("click", function () {
    body.style.backgroundColor = "hsl(206, 70%, 90%)";
});

greenBackground.addEventListener("click", function () {
    body.style.backgroundColor = "hsl(145, 70%, 90%)";
});

redButton.addEventListener("click", function () {
    body.style.backgroundImage = "url(1.png)";
    text.style.color = "hsl(348, 80%, 40%)";
});

blueButton.addEventListener("click", function () {
    body.style.backgroundImage = "url(2.png)";
    text.style.color = "hsl(240, 100%, 32%)";
});

greenButton.addEventListener("click", function () {
    body.style.backgroundImage = "url(3.png)";
    text.style.color = "hsl(100, 50%, 45%)";
});

resetButton.addEventListener("click", function () {
    body.style.backgroundColor = "whitesmoke";
    body.style.backgroundImage = "none";
    text.style.color = "#333";
    slider.value = slider.min;
    text.style.fontSize = slider.value + "em";
});

text.style.fontSize = slider.value + "em";

slider.addEventListener("input", function () {
    text.style.fontSize = slider.value + "em";
});

let count = 0;

function incrementNumber() {
    count++;
    counting.innerText = count;
    if (count < 5) {
        setTimeout(incrementNumber, 3000);
    }
}

incrementNumber();
