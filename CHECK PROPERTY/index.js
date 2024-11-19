const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subscriberesult = document.getElementById("subscriberesult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subscriberesult.textContent = "You are subscribed";
    }
    else{
        subscriberesult.textContent = "You are not subscribed";
    }

    if(visabtn.checked){
        paymentresult.textContent = "You are paying with visa";
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent = "You are paying with master card";
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = "You are paying with paypal";
    }
    else{
        window.alert("Select a payment method");
        location.reload();
    }
}