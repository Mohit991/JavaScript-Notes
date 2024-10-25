let userName = "Mohit";
let index = 0;

// Get the character at index
console.log(userName.charAt(index)); // M

// Get the index of first occurance of the char
console.log(userName.indexOf("o")); // 1

// Get the index of last occurance of the char
console.log(userName.lastIndexOf("o")); // 1

// Get the length of the string
console.log(userName.length); // 5

// Trim the whitespace before and after the string
let s = "  Mohit  ";
console.log(userName.trim()); // "Mohit"

// Make all characters lower case or upper case
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

// If the string starts with a certain substring
console.log(userName.startsWith("Mo")); // true

// If the string ends with a certain substring
console.log(userName.endsWith("it")); // true

// If the string contains with a certain substring
console.log(userName.includes("oh")); // true

// Replace a subtring with another substring
let phoneNumber = "123-456-789";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

// Adding additional characters to a string at the start
console.log(phoneNumber.padStart(15, 0));
// First argument = total chars string should have.
// Second argumnet = What to pad at the beginning.
// output = 000000123456789

// Adding additional characters to a string at the end
console.log(phoneNumber.padEnd(15, 0));
// First argument = total chars string should have.
// Second argumnet = What to pad at the end.
// output = 123456789000000
