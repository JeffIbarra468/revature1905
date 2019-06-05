'use strict'

// In JS an event is handled by each element that has
// a listener for it. The order that elements handle
// an event is determing by bubbling v. capturing.

// using bubbling, event listeners fire inside --> outside
// using capturing outermost -> innermost

// we can stop prop of an event, but we shouldn't

let prop = true;

// callback function we giv to event listeners can have
// a single argument -- the event itself.
function eventLogCallback(event) {
    console.log(event);
    alert( `Callback called for element with id: ${this.id}`);
    if(!prop) event.stopPropagation();
}

// we determine whether or not we're using capturing
// by passing a boolean as a third argument to
// addEventListener();
// true: out to in   false: in to out
let useCapture = false;

document.getElementById("outer")
        .addEventListener("click", eventLogCallback, useCapture);
document.getElementById("inner")
        .addEventListener("click", eventLogCallback, useCapture);
document.getElementById("innermost")
        .addEventListener("click", eventLogCallback, useCapture);

let propButton = document.getElementById("PropToggle");

propButton.addEventListener("click", () => {
    prop = !prop;
    if(prop) {
        propButton.innerText = "Turn Prop OFF";
    } else {
        propButton.innerText = "Turn Prop ON";
    }
});