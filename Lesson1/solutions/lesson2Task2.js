const lesson2Task2Html = `<p>The brieflies way to reflash the global object in needed way is using destricturizing assignment. We can implement this in one line of code: [ window.alert, window.prompt, window.confirm ] = [ window.confirm, window.alert, window.prompt ].</p>
                  <button id="alert">Alert</button>
                  <button id="prompt">Prompt</button>
                  <button id="confirm">Confirm</button>
                  <button id="reflash">Reflash</button>
                  <p>* At the beginning the methods work as usual. To implement new logic please click "Reflash" button. Second click will get changed methods again and again...</p>`;

function lesson2Task2Logic() {
  const alertButton = document.getElementById("alert");
  const promptButton = document.getElementById("prompt");
  const confirmButton = document.getElementById("confirm");
  const reflashButton = document.getElementById("reflash");

  alertButton.addEventListener("click", function () {
    window.alert("Alert message");
  });

  promptButton.addEventListener("click", function () {
    window.prompt("Prompt message");
  });

  confirmButton.addEventListener("click", function () {
    window.confirm("Confirm message");
  });

  reflashButton.addEventListener("click", function () {
    [window.alert, window.prompt, window.confirm] = [
      window.confirm,
      window.alert,
      window.prompt,
    ];
  });
}

export { lesson2Task2Html, lesson2Task2Logic };
