// DOM = Document Object Model
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JS can access the DOM dynamically, change the content, structure and style of the web page.

// document is an object which contains properties and methods.
console.log(document); // shows the complete html document

document.title = "newTitle"; // changing the title of our webpage.
document.body.style.backgroundColor = "green"; // changing the background color of our page.

const username = "Mohit";
document.getElementById("myH1").textContent += username;
