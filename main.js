//Number guessing game

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min
console.log(answer)

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${min} to ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess < min || guess > max){
        window.alert(`Please enter a valid number`);
    }
    else{
        if(guess > answer){
            window.alert(`Guess it TOO HIGH!!`);
            attempts++;
        }
        else if(guess < answer){
            window.alert(`Guess is TOO LOW!!`);
            attempts++;
        }
        else{
            window.alert(`Your guess is correct ${guess} and you took ${attempts} attempts`);
            running = false;
        }
    }
}