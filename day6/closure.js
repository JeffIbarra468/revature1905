'use strict'

// closures are how we do encapsulation in JS
// it allows us to make "private" variables.

// our original clicker counter looked like this:
//
//
//

// Anywhere in our code, we could directly modify the counter
// variable, which would make it not accurately track clicks.

// Let's solve that problem with a closure

// A closure had 4 essential pieces:
// 1: Outer function
function getClickerCounter() {
    // 2: the "closed over" variable that's private
    let counter = 0;

    // 3: the inner function that modifes/returns the private variable
    function count() {
        counter = counter + 1;
        return counter;
        // return ++counter; // short version
    }

// 4: the outer function's returns statement where
// it returns the inner function
return count;
}

let clickerCounter = getClickerCounter();
// console.log(clickerCounter());
// let counter = 70; // clicker counter don't care about global variable
//console.log(clickerCounter());
//console.log(clickerCounter());

let clickerCounter2 = getClickerCounter();
console.log(clickerCounter2());
console.log(clickerCounter2());
console.log(clickerCounter2());

let btn = document.getElementById("clicker");

btn.addEventListener("click", () => {
    btn.innerText = `This has been clicked ${clickerCounter()} times`
});

// a little more fun example:
function makeCounter(noun) {
    let count = 0;

    function countNoun() {
        return `${noun} count is: ${++count}`;
    }

    return countNoun;
}

let catCounter = makeCounter("Cat");
let birdCounter = makeCounter("Bird");

console.log(catCounter);
console.log(birdCounter);
console.log(catCounter);
console.log(birdCounter);
console.log(catCounter);
console.log(birdCounter);