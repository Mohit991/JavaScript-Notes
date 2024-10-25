const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

const counterLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    counterLabel.textContent = count;
};

decreaseBtn.onclick = function () {
    count--;
    counterLabel.textContent = count;
};

resetBtn.onclick = function () {
    count = 0;
    counterLabel.textContent = count;
};
