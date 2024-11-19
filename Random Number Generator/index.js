const mylabel = document.getElementById("mylabel");
const mybutton = document.getElementById("mybutton");

const min = 1;
const max = 6;
let random;

mybutton.onclick = function(){
    random = Math.floor(Math.random() * (max) + min);
    if (random == max){
        mylabel.textContent = random;
        mylabel.style.color = "green";
    }
    else if (random == min){
        mylabel.textContent = random;
        mylabel.style.color = "red";
    }
    else{
        mylabel.textContent = random;
        mylabel.style.color = "orange";
    }
}