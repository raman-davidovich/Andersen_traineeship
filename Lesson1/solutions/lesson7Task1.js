const lesson7Task1Html = `<div id="lesson7Task1">
                            <button id="replace">Click me!</button>
                          </div>`;

function changeButtonPosition(probability) {
  return function (event) {
    const randomValue = Math.floor(Math.random() * 100 + 1);

    if (randomValue <= probability) {
      const button = event.target;
      const container = button.parentNode;
      const containerRect = container.getBoundingClientRect();

      const newX = Math.random() * (containerRect.width - button.offsetWidth);
      const newY = Math.random() * (containerRect.height - button.offsetHeight);

      button.style.position = "absolute";
      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
    }
  };
}

function lesson7Task1Logic() {
  const button = document.getElementById("replace");
  button.addEventListener("click", changeButtonPosition(100));
  button.addEventListener("mouseover", changeButtonPosition(50));
}

export { lesson7Task1Html, lesson7Task1Logic };
