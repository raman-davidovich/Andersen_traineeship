import {
  showLastFinishedLesson,
  showMockPage,
  showInformation,
  markFirstTask,
  showResult,
  setImageSource,
} from "./utils";
import hometasks from "./hometasks";

const lastFinishedLesson = 6;

let currentLesson = lastFinishedLesson;
let currentTask = 1;

const lessons = document.querySelectorAll(".lesson");

lessons.forEach((lesson) =>
  lesson.addEventListener("click", function () {
    currentLesson = lesson.id.at(-1);
    currentTask = 1;

    const activeLesson = document.querySelector(".lessons > .active");
    activeLesson.classList.remove("active");
    this.classList.add("active");

    const information = document.getElementById("information");

    if (hometasks[currentLesson - 1]) {
      information.innerHTML = showInformation(currentLesson);
      markFirstTask();
      const tasks = document.querySelectorAll(".task");
      tasks.forEach((task) =>
        task.addEventListener("click", function () {
          currentTask = task.id.at(-1);
          const activeTask = document.querySelector(".task.active");
          activeTask.classList.remove("active");
          this.classList.add("active");
          const description = document.getElementById("text");
          description.innerHTML =
            hometasks[currentLesson - 1][currentTask - 1].description;
          setImageSource(currentLesson, currentTask);
          showResult(currentLesson, currentTask);
        })
      );
      const description = document.getElementById("text");
      description.innerHTML =
        hometasks[currentLesson - 1][currentTask - 1].description;

      const taskButton = document.getElementById("task1");
      taskButton.click();
    } else {
      information.innerHTML = showMockPage();
    }
  })
);

showLastFinishedLesson(lastFinishedLesson); // clean extra variables
