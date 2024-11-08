/****************** Example 1 <h1> *********************/

// Create the element
const newH1 = document.createElement("h1");

// Add attributes and properties
newH1.textContent = "I like food";
newH1.id = "myH1";

// Append element to DOM
document.body.append(newH1); // append at the end
// document.body.prepend(newH1) // append at the beginning

// document.getElementById("box").append(newH1); // append after the given element

// Remove element to DOM
document.body.removeChild(newH1);
