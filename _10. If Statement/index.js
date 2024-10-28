// if statement = if a condition is true, execute some code
//                if not, do something else

// Simple if
let age = 25;
if (age >= 18) {
    console.log("You are old enough to drive");
}

// if else
let marks = 25;
if (marks >= 40) {
    console.log("You passed the test");
} else {
    console.log("You failed the test");
}

// if else ladder
let time = 9;
if (time < 12) {
    console.log("Good Morning!");
} else if (time > 12 && time < 6) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Night!");
}

// nested if else
let personAge = 25;
let hasLicense = false;

if (personAge >= 18) {
    console.log("You are old enough to drive");
    if (hasLicense) {
        console.log("You already have a license");
    } else {
        console.log("Please apply for a license");
    }
} else {
    console.log("You are old enough to drive");
}
