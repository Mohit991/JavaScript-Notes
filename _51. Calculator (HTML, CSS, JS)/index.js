const display = document.getElementById("display");

// This function will add whatever key the user presses to the already generated string
function appendToDisplay(input) {
    display.value += input;
}

// This function clears the display
function clearDisplay() {
    display.value = "";
}

// This function uses eval() to evalute the string user has generated using the keys
function calculate() {
    // eval() throws an error if the equation does not make sense
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
