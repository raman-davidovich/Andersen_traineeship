import { updateDisplay } from "../utils.js";
import { stopwatchTransformedTime, timerTransformedTime } from "../storage.js";

const lesson7Task2Html = `<div id="lesson7Task2">
                            <div id="stopwatch">
                              <h4>STOPWATCH</h4>
                              <div id="clock_area">
                                <div id="clock">
                                  <span id="stopwatchTensMinutes">0</span>
                                  <span id="stopwatchMinutes">0</span>
                                  <span id="divider">:</span>
                                  <span id="stopwatchTensSeconds">0</span>
                                  <span id="stopwatchSeconds">0</span>
                                </div>
                                <button id="stopwatchReset">
                                  <img id="stopwatchResetIcon" alt="Reset icon" />
                                </button>
                              </div>
                              <button id="stopwatchStart">Start</button>
                            </div>
                            <div id="timer">
                              <h4>TIMER</h4>
                              <div id="clock_area">
                                <div id="clock">
                                  <span id="timerTensMinutes">0</span>
                                  <span id="timerMinutes">0</span>
                                  <span id="divider">:</span>
                                  <span id="timerTensSeconds">0</span>
                                  <span id="timerSeconds">0</span>
                                </div>
                                <button id="timerReset">
                                  <img id="timerResetIcon" alt="Reset icon" />
                                </button>
                              </div>
                              <div id="changeClock">
                                <button id="timerIncrement">+1 m</button>
                                <button id="timerDecrement">-1 m</button>
                              </div>
                              <button id="timerStart">Start</button>
                            </div>
                          </div>`;

function lesson7Task2Logic() {
  let stopwatch;
  let stopwatchCounter = 0;

  let timer;
  let timerCounter = 0;

  const CLOCK_MAX_COUNT = 5999;
  const TIMER_MIN_COUNT = 59;

  const stopwatchStartButton = document.getElementById("stopwatchStart");
  stopwatchStartButton.addEventListener("click", function () {
    stopwatchStartButton.textContent =
      stopwatchStartButton.textContent === "Start" ? "Pause" : "Start";

    if (stopwatchStartButton.textContent === "Pause") {
      stopwatch = setInterval(() => {
        if (stopwatchCounter > CLOCK_MAX_COUNT) {
          stopwatchCounter = 0;
        }
        stopwatchCounter++;
        updateDisplay(stopwatchCounter, stopwatchTransformedTime, "stopwatch");
      }, 1000);
    } else {
      clearInterval(stopwatch);
    }
  });

  const stopwatchResetButton = document.getElementById("stopwatchReset");
  stopwatchResetButton.addEventListener("click", function () {
    if (stopwatchCounter !== 0) {
      let t = Math.round(1000 / stopwatchCounter);
      let interval = setInterval(() => {
        stopwatchCounter--;

        if (stopwatchCounter <= 0) {
          clearInterval(interval);
        }

        updateDisplay(stopwatchCounter, stopwatchTransformedTime, "stopwatch");
      }, t);

      clearInterval(stopwatch);

      if (stopwatchStartButton.textContent === "Pause")
        stopwatchStartButton.textContent = "Start";
    }
  });

  const timerIncrementButton = document.getElementById("timerIncrement");
  timerIncrementButton.addEventListener("click", function () {
    if (timerCounter >= CLOCK_MAX_COUNT) {
      timerCounter = 0;
    }
    timerCounter = timerCounter + 60;

    updateDisplay(timerCounter, timerTransformedTime, "timer");
  });

  const timerDecrementButton = document.getElementById("timerDecrement");
  timerDecrementButton.addEventListener("click", function () {
    if (timerCounter <= TIMER_MIN_COUNT) {
      clearInterval(timer);
      timerStartButton.textContent = "Start";
    }
    timerCounter = timerCounter <= TIMER_MIN_COUNT ? 0 : timerCounter - 60;
    updateDisplay(timerCounter, timerTransformedTime, "timer");
  });

  const timerStartButton = document.getElementById("timerStart");
  timerStartButton.addEventListener("click", function () {
    if (timerCounter > 0 && timerStartButton.textContent === "Start") {
      timerStartButton.textContent = "Pause";
      timer = setInterval(() => {
        timerCounter--;
        updateDisplay(timerCounter, timerTransformedTime, "timer");
      }, 1000);
    } else {
      timerStartButton.textContent =
        timerStartButton.textContent === "Start" ? "Pause" : "Start";
      clearInterval(timer);
    }
  });

  const timerResetButton = document.getElementById("timerReset");
  timerResetButton.addEventListener("click", function () {
    if (timerCounter !== 0) {
      let t = Math.round(1000 / timerCounter);
      let interval = setInterval(() => {
        timerCounter--;

        if (timerCounter <= 0) {
          clearInterval(interval);
        }

        updateDisplay(timerCounter, timerTransformedTime, "timer");
      }, t);

      clearInterval(timer);

      if (timerStartButton.textContent === "Pause")
        timerStartButton.textContent = "Start";
    }
  });
}

export { lesson7Task2Html, lesson7Task2Logic };
