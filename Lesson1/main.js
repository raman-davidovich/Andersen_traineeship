import {
  showLastFinishedLesson,
  showMockPage,
  showInformation,
  markFirstTask,
  showResult,
  setImageSource,
} from "./utils";
import hometasks from "./hometasks";

const lastFinishedLesson = 7;

let currentLesson = lastFinishedLesson;
let currentTask = 1;

document.querySelector(".lessons").addEventListener("click", function (event) {
  const lesson = event.target.closest(".lesson");

  if (lesson) {
    currentLesson = lesson.id.at(-1);
    currentTask = 1;

    const activeLesson = document.querySelector(".lessons > .active");
    activeLesson.classList.remove("active");
    lesson.classList.add("active");

    const information = document.getElementById("information");

    if (hometasks[currentLesson - 1]) {
      information.innerHTML = showInformation(currentLesson);
      markFirstTask();

      document
        .querySelector(".tasks")
        .addEventListener("click", function (event) {
          const task = event.target.closest(".task");

          if (task) {
            currentTask = task.id.at(-1);
            const activeTask = document.querySelector(".task.active");
            activeTask.classList.remove("active");
            task.classList.add("active");
            const description = document.getElementById("text");
            description.innerHTML =
              hometasks[currentLesson - 1][currentTask - 1].description;
            setImageSource(currentLesson, currentTask);
            showResult(currentLesson, currentTask);
          }
        });

      const description = document.getElementById("text");
      description.innerHTML =
        hometasks[currentLesson - 1][currentTask - 1].description;

      const taskButton = document.getElementById("task1");
      taskButton.click();
    } else {
      information.innerHTML = showMockPage();
    }
  }
});

showLastFinishedLesson(lastFinishedLesson);
