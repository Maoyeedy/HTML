var cnBtn = document.getElementById("cnBtn");
var enBtn = document.getElementById("enBtn");
var content = document.getElementById("content");

cnBtn.addEventListener("click", function () {
    content.querySelector(".cn-text").style.display = "block";
    content.querySelector(".en-text").style.display = "none";
    cnBtn.classList.add("active");
    enBtn.classList.remove("active");
});

enBtn.addEventListener("click", function () {
    content.querySelector(".cn-text").style.display = "none";
    content.querySelector(".en-text").style.display = "block";
    enBtn.classList.add("active");
    cnBtn.classList.remove("active");
});
