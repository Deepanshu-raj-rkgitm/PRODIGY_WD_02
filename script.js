let timerInterval;
let isRunning = false;
let seconds = 0;

function formatTime(timeInSeconds) {
  const pad = (num) => (num < 10 ? `0${num}` : num);
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function updateDisplay() {
  document.getElementById("display").textContent = formatTime(seconds);
}

function startStop() {
  if (isRunning) {
    clearInterval(timerInterval);
    document.getElementById("startStop").textContent = "Start";
  } else {
    timerInterval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timerInterval);
  seconds = 0;
  updateDisplay();
  document.getElementById("startStop").textContent = "Start";
  isRunning = false;
}

updateDisplay();
