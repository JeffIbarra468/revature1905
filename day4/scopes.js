'use strict';

// before ES6 we used to declare varibles
// now ewe have let and its better
// by default we should dec var with const

var x1; // function or global scope
let x2 ; // block scope
const x3 = 4; // like let but cabt change

// block is this:
{};

if(true) {
            var y1 = "var y"; // still global scope
            var y2 = "let y"; // let is block scope
}

// console.log(`var y: ${y1}, let y: ${y2}`);

// in Javascript, variables dec are "hoisted"
// to top of their exope:

console.log(z); // return undef, not error
var z = "hi";
console.log(z); // print hi

// function scope is defined inside a function. Note that function
// bodies are blocks, so let works fine.

const c = 5;
// c = 3; // this throws error