'use strict';

function recursiveFactorial(n) {
    console.log(`recursiveFactorial called with arg: ${n}`);
    if(n <= 1){return 1;}

    return n*recursiveFactorial(n-1);

}

function recursiveSum(n) {
    // Can use && to create ranges:
    if(n >= 0 && n <= 1) {return 1;}
    return n + recursiveSum(n-1);
}


// String reversal examples
// iteratvely: 
function iterSR(str) {
    let out="";
    for(let i = 0; i < str.length; i++) {
        out = str[i] + out;
    }

    return out;
    
    /* alternative
    for(let i=str.length; i>=0; i--) {
        out = out + str[i];
    }*/
}


function recurSR(str) {
    if(str.length === 1) {return str[0];}

    return recurSR(str.substring(1)) + str[0];
}


function funcSR(str) {
    return str.split("").reverse().join(",");
}


function recurFB(n) {
    if(n <= 1) { return 1;}
    return recurFB(n -1) + recurFB(n -2);
}

console.log(`iter string reverse of hello: ${iterSR("hello")}`);

console.log(`recur string reverse of hello: ${recurSR("hello")}`);

console.log(`func string reverse of hello: ${funcSR("hello")}`);

console.log(`nth fib number: ${recurFB(10)}`);

//console.log("factorial of 5 is: ");
//console.log(recursiveFactorial(5));