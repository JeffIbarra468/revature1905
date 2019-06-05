'use script';

//create an array in JS using []
let myArr = []; // empty Array
myArr = [1,3,5,7]; // array of numbers

//access indices like with strings
myArr[2]; // 5

// iterate through with index:
for(let i = 0; i < myArr.length; i++) {
    console.log(`iter with index ${myArr[i]}`);
}

// iterate with for loop
for(let e of myArr) {
    console.log(`iter with for of: ${e}`);
}

// we already saw reverse
myArr.reverse();
console.log(myArr);

// creates a new array by filtering another array
// the callback function returns true or false based on
// whether the given ellement should be included
let newArr = myArr.filter((e) => {
    return e < 5; // seeing elements less than 5
})

console.log(`new Array: ${newArr}`);

// map applied a function to each element of an array
// and returns a new array with the return values
let timesTwoArr = myArr.map((e) => {
    return 2 * e;
})

console.log(`tomes two array: ${timesTwoArr}`);

// reduce applies a function to two elements of an array
// and then calls the reduce function with that return 
// and the next array element, until the end of the array
// is reached

let sum = myArr.reduce((e1,e2) => {
    return e1 + e2;
})

console.log(`sum : ${sum}`);

// good use is finding max
// myArr.push(13); // add element
let max = myArr.reduce((e1, e2) => {
    return Math.max(e1,e2);
})

console.log(`max : ${max}`);