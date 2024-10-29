// reduce() = reduces an array into a single element.
//          accepts a callback and applies that to each element of an array.
//         callback will get accumulator and next element in this specific order.

let prices = [100, 200, 100, 900, 500];

function sum(previousResult, nextElement) {
    // Initially previousResult = 0
    return previousResult + nextElement;
}

let total = prices.reduce(sum);
console.log(total);

//  or

total = prices.reduce((previousResult, nextElement) => {
    return previousResult + nextElement;
});
console.log(total);

/******************************************************/

const grades = [75, 79, 43, 78, 56, 90, 55];

maxMarks = grades.reduce((previousResult, nextElement) => {
    return previousResult > nextElement ? previousResult : nextElement;
});

console.log(maxMarks);
