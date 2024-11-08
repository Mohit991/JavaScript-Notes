const stopwatch = document.getElementById("stopwatch");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    stopwatch.textContent = `00:00:00:00`;
}

function update() {
    const currentTime = Date.now();
    // elapsedTime will be in ms.
    elapsedTime = currentTime - startTime;
    // let us convert it to hours, mins and seconds.
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milli = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milli = String(milli).padStart(2, 0);

    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milli}`;
}
