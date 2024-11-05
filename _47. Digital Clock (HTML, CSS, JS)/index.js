function updateClock() {
    const now = new Date();
    // first we take the hours, minutes and seconds from the current time ie now.
    // we want to show hours:minutes:seconds as hh:mm:ss ie two digits for each.
    // to do so, we first convert hours, minutes and seconds to string.
    // then we use the padStart method to pad zeros at the start of the string.
    // padStart(2, 0) will pad zeros to the string until it reaches the length of 2.
    // If it is already 2 then we dont pad anything else we pad zeros at the start until length is 2.
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();

// setInterval() = The setInterval() method calls a function at specified intervals (in milliseconds).
//                 The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

setInterval(updateClock, 1000);
// We will call updateClock method after 1000ms ie after every second
// we will update the clock after each second and put the latest time there.
