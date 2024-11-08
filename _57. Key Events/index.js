// eventListener = Listen for specific events to create interactive web pages.
//                 events: keydown, keyup, keypress
//                 .addEventListener(event, callback)

// when any key is pressed
document.addEventListener("keydown", (event) => {
    alert("key down");
});

// when any key is released after being pressed
document.addEventListener("keyup", (event) => {
    alert("key up");
});
