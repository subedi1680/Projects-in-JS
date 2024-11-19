//getting element from html
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const clabel = document.getElementById("clabel");

//setting count to 0
let count = 0;

//increase button functionality on click
increase.onclick = function(){
    count++;
    clabel.textContent = count;
}

//decrease button functionality on click
decrease.onclick = function(){
    count--;
    clabel.textContent = count;
}

//reset button functionality on click
reset.onclick = function(){
    count = 0;
    clabel.textContent = count;
}
