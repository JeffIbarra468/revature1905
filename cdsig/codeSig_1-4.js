'use strict'
/*
// code signal problem 2
function centuryFromYear(year) {

    let cFY = year/100;
    let cenChk = year%100;
    console.log(`CFY: ${cFY} and cenCHK: ${cenChk}`);

    if(cenChk === 0)
        cFY = Math.floor(cFY);
    else
        cFY = Math.floor(cFY) + 1;

    console.log(`Century of Year: ${cFY}`); 
    return cFY;
   }


   // code signal problem 3
   function checkPalindrome(inputString) {
    console.log(inputString);
    let str = inputString;

    let revStr = str.split("").reverse().join("");

    console.log(revStr);
    
    let output;
    
    if(inputString === revStr)
     output = true;
    else
     output = false;

    console.log(output);
    return output;
    
   }

   checkPalindrome("aacdaa");


   // Code Signal Problem Adjacent Product
   var inputArray = [3,6,-2,-5,7,3];

   function adjacentElementsProduct(inputArray) {

    let largest = 0
    let secLargest = 0;
    let Product = -Infinity;
    let checker = 0;

    for(let i = 0; i < inputArray.length; i++)
        {
            largest = inputArray[i];
            secLargest = inputArray[i + 1];
                
            checker = largest * secLargest;
            if(Product < checker)
                Product = checker;
        }

    console.log(`Product: ${Product}`);
    return Product;
   }

   adjacentElementsProduct(inputArray);
*/

   /*
   // NOT ACTUAL ANSWER BUT COOL ALGORIHTHM  
   function adjacentElementsProduct(inputArray) {

    let largest = 0;
    
    // First rendition
    for(let i = 0; i < inputArray.length; i++)
        {
            if(largest < inputArray[i])
                {
                    console.log(`Largest: ${largest} IA: ${inputArray[i]}`);
                    largest = inputArray[i];
                }
                
        }

    let secLargest = 0;

    //Second rendition
    for(let j = 0; j < inputArray.length; j++)
        {
            if((secLargest < inputArray[j]) && (inputArray[j] != largest))
                {
                    console.log(`Second Largest: ${secLargest} IA: ${inputArray[j]}`);
                    secLargest = inputArray[j];
                }
                
        }

        let Prod = largest * secLargest
        console.log(`Product: ${Prod}`);

    return Prod;
}



// Code signal Problem Shape Area
function shapeArea(n) {
    let area = 1;
    
    for(let i = 1; i < n; i++)
        area = area + (4 * i);

    console.log(`Area: ${area}`);
}

shapeArea(1);
shapeArea(2);
shapeArea(3);
shapeArea(4);
*/

function makeArrayConsecutive2(statues) {

    let myArr = statues;

    for(let i = 0; i < myArr.length; i++)
        console.log(`Statue ${i}: ${myArr}`);
}