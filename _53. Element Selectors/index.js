// element selectors = methods used to target and manipulate HTML elements.
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById() = elements if our from id else null
// 2. document.getElementsByClassName() = HTML Collection
// 3. document.getElementsByTagName() = HTML Collection
// 4. document.querySelector() = First matching element or null
// 5. document.querySelectorAll() = Node list

/*************** getElementById *************/

const myHeading = document.getElementById("myH1");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);

/*************** getElementsByClassName *************/

// it selects all the elements from DOM which have the given class.
// it will return an array which we can use using [].
// fruits array will contain all the elements which have class "fruits".
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "red"; // picking the first element of fruits array

for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}

/*************** getElementByTagName *************/

// it selects all the given tag elements from DOM.
// it will return an array which we can use using [].
// h4Elements array will contain all the h4 elements.
const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.backgroundColor = "red"; // picking the first element of fruits array

for (let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "red";
}

/*************** querySelector *************/

// we select the first element that matches our query.
// we will use .<class_name> for class, and <tag_name> for tag
// below statement will select the first element from the DOM which has the class "fruits"
const element1 = document.querySelector(".fruits");
element1.style.backgroundColor = "green";

// below statement will select the first h4 from the DOM.
const element2 = document.querySelector("h4");
element2.style.backgroundColor = "black";

/*************** querySelectorAll *************/

// we select the nodelist which has many functions.
// The difference between HTML collections are live and nodelist is that nodelist are non live.

const f = document.querySelectorAll(".fruits");
f[0].style.backgroundColor = "pink";
