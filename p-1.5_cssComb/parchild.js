'use strict';

let btn = document.getElementById("btn");
let Rha = document.getElementById("Rhaegar");


let clicked = false;
btn.addEventListener("click", () => {
    clicked = !clicked;
    if (clicked) {
        document.getElementById("Rhaegar").style.backgroundColor = "white";
    }
    else {
        document.getElementById("Rhaegar").style.backgroundColor = "orange";
    }
});


let btn2 = document.getElementById("btn2");
let Ar = document.getElementById("Aerys");

let clicked2 = false;
btn2.addEventListener("click", () => {
    clicked2 = !clicked2;
    if(clicked2) {
        document.getElementById("Aerys").style.fontStyle = "italic";
    }
    else {
        document.getElementById("Aerys").style.fontStyle = "normal";
    }
});