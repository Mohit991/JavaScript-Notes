// DOM Navigation = The process of navigating through the structure of an HTML document using JS.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const element = document.getElementById("fruits");

// .firstElementChild
// will pick the first child element of our element
const firstChild = element.firstElementChild; // <li>apple</li>
firstChild.style.backgroundColor = "green";

// .lastElementChild
// will pick the last child element of our element
const lastChild = element.lastElementChild; // <li>banana</li>
lastChild.style.backgroundColor = "green";

// .nextElementSibling
// will pick the next sibling element of our element
const element1 = document.getElementById("apple");
const nextSibling = element1.nextElementSibling; // <li>orange</li>
nextSibling.style.backgroundColor = "pink";

// .previousElementSibling
// will pick the previous sibling element of our element
const element2 = document.getElementById("orange");
const prevSibling = element2.previousElementSibling; // <li>apple</li>
prevSibling.style.backgroundColor = "blue";

// .parentElement
// will pick the parent element of our element
const parent = element2.parentElement; // <ul id="fruits">
parent.style.backgroundColor = "purple";

// .children
// will pick all the children element of our element returns html collection
const children = element.children; // <ul id="fruits">
console.log(children);
