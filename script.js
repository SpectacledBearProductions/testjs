let like = parseInt(localStorage.getItem("count")) || 0;
let clicked = false;//save it and click once
 //like button
const button = document.getElementById("like");
const display = document.getElementById("display");
display.textContent = like;
button.addEventListener("click", function () {
    if (!clicked) {
        like++;
        display.textContent = like;
        localStorage.setItem("count", like);
        clicked = true;
    }
});
