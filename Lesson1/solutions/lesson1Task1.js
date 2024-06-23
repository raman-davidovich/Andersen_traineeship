const quiz = [
  {
    expression: `<img id="lesson1Task1Quiz1" class="imageSlider" />`,
    answer: 2,
    explanation: `The string "5" is coerced to the number 5, and 5 - 3 results in 2.`,
  },
  {
    expression: `<img id="lesson1Task1Quiz2" class="imageSlider" />`,
    answer: 1,
    explanation: `true is coerced to 1 and false to 0, so 1 + 0 results in 1.`,
  },
  {
    expression: `<img id="lesson1Task1Quiz3" class="imageSlider" />`,
    answer: "null5",
    explanation: `null is coerced to the string "null", and concatenation with "5" results in "null5".`,
  },
  {
    expression: `<img id="lesson1Task1Quiz4" class="imageSlider" />`,
    answer: "111",
    explanation: `1 + "1" results in the string "11", and "11" + 1 results in "111".`,
  },
  {
    expression: `<img id="lesson1Task1Quiz5" class="imageSlider" />`,
    answer: `"[object Object]"`,
    explanation: `[] is coerced to "" and {} to "[object Object]", so "" + "[object Object]" results in "[object Object]".`,
  },
  {
    expression: `<img id="lesson1Task1Quiz6" class="imageSlider" />`,
    answer: 0,
    explanation: `In this context, {} is treated as an empty code block, and +[] coerces the empty array to 0.`,
  },
  {
    expression: `<img id="lesson1Task1Quiz7" class="imageSlider" />`,
    answer: "fooNaN",
    explanation: `+"bar" results in NaN, so "foo" + NaN results in "fooNaN".`,
  },
  {
    expression: `<img id="lesson1Task1Quiz8" class="imageSlider" />`,
    answer: true,
    explanation: `![] results in false, which is coerced to 0. [] is also coerced to 0 in a comparison, so 0 == 0 is true.`,
  },
  {
    expression: `<img id="lesson1Task1Quiz9" class="imageSlider" />`,
    answer: true,
    explanation: `null and undefined are equal when compared using == but not ===.`,
  },
  {
    expression: `<img id="lesson1Task1Quiz10" class="imageSlider" />`,
    answer: "",
    explanation: `Both [] are coerced to "", so "" + "" results in "".`,
  },
];

const quizHtml = quiz
  .map(
    (element, index) => `                  
                    <div class="sliderDialog">
                      <dialog id="dialog${index}">
                      <h2>Answer: ${element.answer}</h2>
                      <p>Explanaton: ${element.explanation}</p>
                      <button autofocus id="close${index}">Close</button>
                      </dialog>
                      ${element.expression}
                      <button id="show${index}">Show the answer.</button>
                    </div>`
  )
  .join(" ");

const task1Html = `
  <h3>Try to guess an answer and check yourself using "show the answer"</h3>
  <div class="slider-container">
    <div class="slider">
      ${quizHtml}
    </div>
  <button class="prev-button" aria-label="Посмотреть предыдущий слайд">&lt</button>
  <button class="next-button" aria-label="Посмотреть следующий слайд">&gt</button>
  </div>
`;

function logicTask1() {
  // Получаем элементы слайдера
  const slider = document.querySelector(".slider");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const slides = Array.from(slider.querySelectorAll(".sliderDialog"));
  const slideCount = slides.length;
  let slideIndex = 0;

  // Устанавливаем обработчики событий для кнопок
  prevButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Функция для показа предыдущего слайда
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Функция для показа следующего слайда
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

  // Функция для обновления отображения слайдера
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Инициализация слайдера
  updateSlider();

  const dialogs = document.querySelectorAll('[id^="dialog"]');
  dialogs.forEach((dialog, index) => {
    const showButton = document.getElementById(`show${index}`);
    const closeButton = document.getElementById(`close${index}`);

    showButton.addEventListener("click", () => {
      dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  });
}

export { task1Html, logicTask1 };
