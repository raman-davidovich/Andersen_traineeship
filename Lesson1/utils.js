import hometasks from "./hometasks";
import { lesson1Task1Html, lesson1Task1Logic } from "./solutions/lesson1Task1";
import { lesson1Task2Html, lesson1Task2Logic } from "./solutions/lesson1Task2";
import { lesson2Task1Html, lesson2Task1Logic } from "./solutions/lesson2Task1";
import { lesson2Task2Html, lesson2Task2Logic } from "./solutions/lesson2Task2";
import { lesson3Task2Html, lesson3Task2Logic } from "./solutions/lesson3Task2";
import { lesson5Task1Html, lesson5Task1Logic } from "./solutions/lesson5Task1";
import { lesson6Task1Html, lesson6Task1Logic } from "./solutions/lesson6Task1";
import { lesson7Task1Html, lesson7Task1Logic } from "./solutions/lesson7Task1";
import { lesson7Task2Html, lesson7Task2Logic } from "./solutions/lesson7Task2";

import images from "./assets/images";

const solutions = [
  [
    { html: lesson1Task1Html, logic: lesson1Task1Logic },
    { html: lesson1Task2Html, logic: lesson1Task2Logic },
  ],
  [
    { html: lesson2Task1Html, logic: lesson2Task1Logic },
    { html: lesson2Task2Html, logic: lesson2Task2Logic },
  ],
  [
    { html: null, logic: null },
    { html: lesson3Task2Html, logic: lesson3Task2Logic },
  ],
  [{ html: null, logic: null }],
  [{ html: lesson5Task1Html, logic: lesson5Task1Logic }],
  [{ html: lesson6Task1Html, logic: lesson6Task1Logic }],
  [
    { html: lesson7Task1Html, logic: lesson7Task1Logic },
    { html: lesson7Task2Html, logic: lesson7Task2Logic },
  ],
];

function showLastFinishedLesson(lastFinishedLesson) {
  const lesson = document.getElementById(`lesson${lastFinishedLesson}`);
  lesson.classList.add("active");
  const information = document.getElementById("information");
  if (hometasks[lastFinishedLesson - 1]) {
    information.innerHTML = showInformation(lastFinishedLesson);
    markFirstTask();
    const description = document.getElementById("text");
    description.innerHTML = hometasks[lastFinishedLesson - 1][0].description;
    showResult(lastFinishedLesson, 1);
  } else {
    information.innerHTML = showMockPage();
  }
  lesson.click();

  const taskButton = document.getElementById("task1");
  taskButton.click();
}

function showMockPage() {
  return `<div class="mock">
      <h2>Comming soon...</h2>
    </div>`;
}

function showInformation(currentLesson) {
  const tasksButtons = hometasks[currentLesson - 1]
    .map(
      (item, index) =>
        `<button id="task${index + 1}" class="task">Task ${index + 1}</button>`
    )
    .join("");
  return `<nav class="tasks">
            ${tasksButtons}
          </nav>
          <div id="assignment">
            <div id="description">
              <h3>Description</h3>
              <div id="text"></div>
            </div>
            <div id="result">
              <h3>Result</h3>
              <div class="solution"> 
              </div>
              <a href="#" target="_blank" id="github">Show code</a>
            </div>
          </div>
  `;
}

function markFirstTask() {
  const task = document.getElementById("task1");
  task.classList.add("active");
}

function showResult(lesson, task) {
  const solution = solutions[lesson - 1][task - 1];

  if (solution && solution.html && solution.logic) {
    const solutionBlock = document.querySelector(".solution");
    solutionBlock.innerHTML = solution.html;
    solution.logic();

    setImageSource(lesson, task);

    if (lesson == 7 && task == 2) setImageSource(7, 2, "timerResetIcon");

    if (lesson == 1 && task == 1) {
      images.lesson1.task1.quizess.forEach((imgUrl, index) => {
        document.getElementById(`lesson1Task1Quiz${index + 1}`).src = imgUrl;
      });
    }

    const githubLink = document.getElementById("github");
    githubLink.setAttribute("href", hometasks[lesson - 1][task - 1].githubLink);
  } else {
    console.warn(`No solution found for lesson${lesson}, task${task}.`);
  }
}

function setImageSource(lesson, task, elementIdOverride) {
  let elementId = "";
  let imageUrl = "";

  switch (`${lesson}-${task}`) {
    case "1-1":
      elementId = "lesson1Task1DescriptionImage";
      imageUrl = images.lesson1.task1.example;
      break;
    case "2-2":
      elementId = "lesson2Task2DescriptionImage";
      imageUrl = images.lesson2.task2.example;
      break;
    case "3-2":
      elementId = "lesson3Task2DescriptionImage";
      imageUrl = images.lesson3.task2.example;
      break;
    case "7-2":
      elementId = "stopwatchResetIcon";
      imageUrl = images.lesson7.task2.icon;
      break;
    default:
      return;
  }

  if (elementIdOverride) {
    elementId = elementIdOverride;
  }

  if (elementId && imageUrl) {
    const imageElement = document.getElementById(elementId);
    if (imageElement) {
      imageElement.src = imageUrl;
    } else {
      console.warn(`Element with id ${elementId} not found.`);
    }
  }
}

function updateDisplay(counter = 0, transformedTime, application) {
  transformedTime.tensMinutes = String(
    Math.trunc(counter / 60) > 9 ? Math.trunc(counter / 60 / 10) : "0"
  );
  transformedTime.minutes = String(
    Math.trunc(counter / 60) < 9
      ? Math.trunc(counter / 60)
      : String(Math.trunc(counter / 60))
          .split("")
          .pop()
  );
  transformedTime.tensSeconds =
    Math.trunc((counter % 60) / 10) > 5
      ? Math.trunc((counter % 60) / 10) - 6
      : Math.trunc((counter % 60) / 10);
  transformedTime.seconds = String(counter).split("").pop();

  if (application === "stopwatch") {
    const stopwatchTensMinutesElement = document.getElementById(
      "stopwatchTensMinutes"
    );
    const stopwatchMinutesElement = document.getElementById("stopwatchMinutes");
    const stopwatchTensSecondsElement = document.getElementById(
      "stopwatchTensSeconds"
    );
    const stopwatchSecondsElement = document.getElementById("stopwatchSeconds");

    stopwatchTensMinutesElement.textContent = transformedTime.tensMinutes;
    stopwatchMinutesElement.textContent = transformedTime.minutes;
    stopwatchTensSecondsElement.textContent = transformedTime.tensSeconds;
    stopwatchSecondsElement.textContent = transformedTime.seconds;
  }

  if (application === "timer") {
    const timerTensMinutesElement = document.getElementById("timerTensMinutes");
    const timerMinutesElement = document.getElementById("timerMinutes");
    const timerTensSecondsElement = document.getElementById("timerTensSeconds");
    const timerSecondsElement = document.getElementById("timerSeconds");

    timerTensMinutesElement.textContent = transformedTime.tensMinutes;
    timerMinutesElement.textContent = transformedTime.minutes;
    timerTensSecondsElement.textContent = transformedTime.tensSeconds;
    timerSecondsElement.textContent = transformedTime.seconds;
  }
}

export {
  showLastFinishedLesson,
  showMockPage,
  showInformation,
  markFirstTask,
  showResult,
  setImageSource,
  updateDisplay,
};
