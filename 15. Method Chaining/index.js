// Method Chaining = Calling one method after another in one continous line of code.  


// ----- No Method Chaining ----- //
let userName = " mohit  "

userName = userName.trim()

let firstLetter = userName.charAt(0)
firstLetter = firstLetter.toUpperCase()

let restChars = userName.slice(1)
restChars = restChars.toLowerCase()

userName = firstLetter + restChars
console.log(userName);

// ----- Method Chaining ----- //
let uName = " mohit  "

// Next function will work on what the last function returns.  
uName = uName.trim().charAt(0).toUpperCase() + uName.trim().slice(1).toLowerCase()
console.log(uName);


