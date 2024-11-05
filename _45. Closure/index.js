// closure = a function defined another function.
//           The inner function has access to the variables and scope of the outer function.
//           Used frequently in JS frameworks such as react, vue and angular.
//           You can only use the inner function inside the outer function.

function outer() {
    let message = "hello";
    function inner() {
        console.log(message);
    }
    inner(); // can only be called inside outer function
}

outer(); // prints 'hello'

/************ Maintaining state using closure ****************/

function increment() {
    let count = 0;
    count++;
    console.log(`Count = ${count}`);
}

increment(); // Count = 1
increment(); // Count = 1
increment(); // Count = 1
// count is getting resetted to 0 every time increment is called.

// Let us use closure to maintain a state
function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(`Count = ${count}`);
    }
    function getCount() {
        return count;
    }
    return { increment, getCount }; // it is actually an object ie {key: value} ie return { increment: increment, getCount: getCount }, so we are returning an object
}

const counter = createCounter(); // createCounter returns increment and getCount functions.
counter.increment(); // Count = 1
counter.increment(); // Count = 2
counter.increment(); // Count = 3

const count = counter.getCount();
console.log(count); // 3

/************ game example ****************/

function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(5); // +5pts
game.increaseScore(10); // +10pts
game.decreaseScore(4); // -4pts

const finalScore = game.getScore();
console.log(finalScore); //11
