'use strict'

// Javascript chnage text color for readablity
let btn = document.getElementById("btn");
let clicked = false;
btn.addEventListener("click", () => {
    clicked = !clicked;
    if (clicked) {
        document.getElementById("main-text").style.color = "red";
    } else {
        document.getElementById("main-text").style.color = "black";
    }
})
/*
// JS method for hovering links
let hypLink = document.getElementById("hypLink");

hypLink.addEventListener("click", () => {
    document.getElementById("hypLink").style.color = "rgb(198,89,211)";
}
*/