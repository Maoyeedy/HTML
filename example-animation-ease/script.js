let canMoveCircles = true
document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && canMoveCircles) {
        moveCircles()
        canMoveCircles = false
        setTimeout(function () {
            canMoveCircles = true
        }, 500)
    }
})

function moveCircles () {
    var circle1 = document.getElementById("circle1")
    var circle2 = document.getElementById("circle2")

    if (circle1.style.left === "80vw") {
        circle1.style.left = "10vw"
        circle2.style.left = "10vw"
    } else {
        circle1.style.left = "80vw"
        circle2.style.left = "80vw"
    }
}
