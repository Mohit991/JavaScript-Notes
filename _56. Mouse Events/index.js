// eventListener = Listen for specific events to create interactive web pages.
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback)

const myBox = document.getElementById("myBox");

/******** Passing a normal function  *******/

// event object is provided to us by the browser automatically.
// event object will contain a lot of info about the event that occured.
function changeSomething(event) {
    // event.target = element to which the event occured (button or div etc)
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Clicked";
}

myBox.addEventListener("click", changeSomething);

/******** Passing an anonymous function  *******/

myBox.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "Clicked";
});

/******** Passing an arrow function  *******/

myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "Clicked";
});

/*********** mouseover event *********/

// When you move your cursor onto the element
myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont please";
});

/*********** mouseout event *********/

// When you move your cursor out of the element
myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "gray";
    event.target.textContent = "NOOOOOOOO";
});

// You can apply these events on buttons and other html elements. 