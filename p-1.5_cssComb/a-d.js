'use strict';

let btn3 = document.getElementById("btn3");
let S = document.getElementById("swords");

let clicked3 = false;
btn3.addEventListener("click", () => {
    clicked3 = !clicked3;
    if(clicked3) {
        S.style.display = "block";
    }
    else {
        S.style.display = "none"
    }
});