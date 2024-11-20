const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Enter a valid number`);
    }
    else if(guess < minNum || guess > maxNum){
        console.log(`Please enter a valid number`);
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("Too low. Try again");
        }
        else if(guess>answer){
            window.alert("Too high. Try again");
        }
        else{
            window.alert(`Congarts!! The answer was ${answer} and you took ${attempts} attempts.`)
            running = false;
        }
    }
}

