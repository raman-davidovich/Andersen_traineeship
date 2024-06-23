import hometasks from "./hometasks";
import { task2HTML, logicTask2 } from "./solutions/lesson1Task2";
import { task1Html, logicTask1 } from "./solutions/lesson1Task1";

const solutions = [
  [
    { html: task1Html, logic: logicTask1 },
    { html: task2HTML, logic: logicTask2 },
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
  const solutionBlock = document.querySelector(".solution");
  solutionBlock.innerHTML = solutions[lesson - 1][task - 1].html;
  solutions[lesson - 1][task - 1].logic();

  const githubLink = document.getElementById("github");
  githubLink.setAttribute("href", hometasks[lesson - 1][task - 1].githubLink);
}

export {
  showLastFinishedLesson,
  showMockPage,
  showInformation,
  markFirstTask,
  showResult,
};
