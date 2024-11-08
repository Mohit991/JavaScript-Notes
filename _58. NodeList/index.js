// NodeList = static collection of html elements by (id, class, element)
//            can be created using querySelectorAll()
//            similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes
//            eg if you have a nodelist and do some changes to the DOM, nodelist wont get updated automatically.

// buttons is a nodelist
let buttons = document.querySelectorAll(".myButtons"); // returns a list of html element

buttons.forEach((button) => {
    button.style.backgroundColor = "green";
    button.addEventListener("click", (e) => {
        alert("clicked");
    });
});
