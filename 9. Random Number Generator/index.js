//Random Number Generator

// Genrator a random number between 0 and 1
let randomNum = Math.random();

// Genrator a random number between 0 and 6 without decimals
let randomNumTillSix = Math.floor(Math.random() * 6);

// Genrator a random number between 1 and 100 without decimals
let randomNumTillHundred = Math.floor(Math.random() * 100) + 1;

// Genrator a random number between min and max without decimals
const min = 50;
const max = 100;
let randomNumBetweenMinMax = Math.floor(Math.random() * max) + min;