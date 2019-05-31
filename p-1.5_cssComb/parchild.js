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
        // document.getElementById("Aerys").style.fontStyle = "italic";
        Ar.style.fontStyle = "italic";
    }
    else {
        document.getElementById("Aerys").style.fontStyle = "normal";
    }
});

// let btn3 = document.getElementById("btn3");
// let clicked3 = false;
// btn3.addEventListener("click", () => {
//     clicked3 = !clicked3;
//     if(clicked3) {
//         document.getElementById("swords").style.display = "none";
//     }
//     else {
//         document.getElementById("swords").style.display = "block";
//     }
// });

let btn3 = document.getElementById("btn3");
let S = document.getElementById("swords");

let clicked3 = false;
btn3.addEventListener("click", () => {
    clicked3 = !clicked3;
    if(clicked3) {
        S.style.display = "none";
    }
    else {
        S.style.display = "block"
    }
});