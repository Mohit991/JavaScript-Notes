// String Slicing = Creating a substring from a portion of another string
//                  string.slice(start, end)
//                  returns a substring. Does not affact the original string.

const fullName = "Mohit Sharma";
// Last index is excluded.
let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6); //end index can be excluded.
console.log(firstName); // Mohit
console.log(lastName); // Sharma


const email = "mohit94596@gmail.com"
let userName = email.slice(0, email.indexOf("@"))
console.log(userName);
let extension = email.slice(email.indexOf("@")+1)
console.log(extension);
