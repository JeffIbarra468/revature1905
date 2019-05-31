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
let counter = 0;
let HAS = document.getElementById("HAS");
let ckd = false;
HAS.addEventListener("click", () => {
    ckd = !ckd;

    if (ckd) {
        // Next adj sib group
        counter++;

        switch(counter) {
            case 1:
                // Reset 
                if((document.getElementById("BS").style.color != 'Black') && (document.getElementById("RkS").style.color != 'Black'))
                 {  
                    document.getElementById("BS").style.color = 'Black';
                    document.getElementById("RkS").style.color = 'Black';
                 }
                else // BOLD RS & SS
                 {
                    document.getElementById("RS").style.color = 'Yellow';
                    document.getElementById("SS").style.color = 'Yellow';
                 }

                if(counter === 4)
                    counter = 1;
                break;
            case 2:
                //BOLD RB & SS
                document.getElementById("RS").style.color = 'Black';
                document.getElementById("SS").style.color = 'Yellow';
                document.getElementById("AS").style.color = 'Yellow';
                
                if(counter === 4)
                    counter = 1;
                break;
            case 3:
                //BOLD RB & SS
                document.getElementById("SS").style.color = 'Black';
                document.getElementById("AS").style.color = 'Yellow';
                document.getElementById("BS").style.color = 'Yellow';
                
                if(counter === 4)
                    counter = 1;
                break;
            case 4:
                //BOLD RB & SS
                document.getElementById("AS").style.color = 'Black';
                document.getElementById("BS").style.color = 'Yellow';
                document.getElementById("RkS").style.color = 'Yellow';

                if(counter === 4)
                    counter = 1;
                break;
            default:
        }

    } else {
        // document.getElementById("main-text").style.color = "black";
    }
})
*/
/*
// JS method for hovering links
let hypLink = document.getElementById("hypLink");

hypLink.addEventListener("click", () => {
    document.getElementById("hypLink").style.color = "rgb(198,89,211)";
}
*/