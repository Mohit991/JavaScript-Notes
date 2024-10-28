// Number Guessing Game

const minNum = 10;
const maxNum = 100;

//Generating a minimum number between our max and min number.
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    //change string to number
    guess = Number(guess);
    //check if guess is a number of not
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too Low");
        } else if (guess > answer) {
            window.alert("Too High");
        } else {
            window.alert(`Correct! It took you ${attempts} attempts`);
            running = false;
        }
    }
}
