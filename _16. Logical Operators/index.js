// Logical Operators = used to combine or manipulate boolean values (true and false)

// AND = && (both conditions true)
// OR = || (either condition true)
// NOT = ! (condition not true)

const temp = 20;
if (temp > 0 && temp <= 30) {
    console.log("Weather is good");
} else {
    console.log("Weather is bad");
}
/*************************************/
//  = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values and datatypes are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;
if (PI == "3.14") {
    //This is execute because of ==
    console.log("It's PI");
} else {
    console.log("Not PI");
}

/*************************************/
if (PI === "3.14") {
    console.log("It's PI");
} else {
    //This is execute because of ===
    console.log("Not PI");
}
