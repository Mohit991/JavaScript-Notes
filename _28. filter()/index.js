// filter() = create a new array by filtering our elements. 
//          accepts a callback and applies that filter to each element of an array.
//         callback will get element, index, array in this specific order.

let nums = [1, 2, 3, 4, 5];

function isEven(element){
    // If we return true element is returned else element is not returned. 
    // For elements 2, 4, we return true, hence they are added to the new array(evenNums).
    return element%2 === 0
}

let evenNums = nums.filter(isEven)
console.log(evenNums); // prints [ 2, 4 ]

// or 

evenNums = nums.filter((element) => {
    // If we return true element is returned else element is not returned. 
    // For elements 2, 4, we return true, hence they are added to the new array(evenNums).
    return element%2 === 0
})
console.log(evenNums); // prints [ 2, 4 ]

/**********************************************/

const ages = [16, 17, 21, 23, 15, 18]

let adults = ages.filter((element) => {
    return element >= 18
})

let children = ages.filter((element) => {
    return element < 18
})

console.log(adults); // [ 21, 23, 18 ]
console.log(children); // [ 16, 17, 15 ]

/**********************************************/

const words = ["apple", "orange", "banana", "kiwi", "coconut"]

shortWords = words.filter((element) => {
    return element.length < 6
})

longWords = words.filter((element) => {
    return element.length >= 6
})

console.log(shortWords); // prints [ 'apple', 'kiwi' ]
console.log(longWords); // prints [ 'orange', 'banana', 'coconut' ]






