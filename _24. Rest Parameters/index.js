// rest parameters = (...rest) allows a function to work with a variable number of arguments by bundling them into an array.

// spread = expands array into seperate elements
// rest = bundles seperate elements into an array

function openFridge(...foods) {
    console.log(foods);
    // prints [ 'pizza', 'ham', 'hotdog', 'sushi' ]
}

function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "ham";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);
// prints [ 'pizza', 'ham', 'hotdog', 'sushi' ]

/*******************************************/

function sum(...numbers) {
    let res = 0;
    for (let n of numbers) {
        res += n;
    }
    return res;
}

//You can pass any number of arguments into the sum function now.
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*******************************************/

function combineString(...strings) {
    return strings.join(" ");
    // prints Mr. Mohit Sharma III
    // join(" ") joins the strings from an array and adds " " between them
}

const fullname = combineString("Mr.", "Mohit", "Sharma", "III");
console.log(fullname);
