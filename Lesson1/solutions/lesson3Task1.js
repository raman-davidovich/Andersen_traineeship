const lesson3Task1Html = `<div id="lesson3Task1">
                            <fieldset>
                              <legend>Create object</legend>
                              <div id="parameters">
                                <label for="from">Input from value</label>
                                <input id="from" required />
                                <label for="to">Input to value</label>
                                <input id="to" required />
                                <button id="create" disabled>Create object</button>
                                <button id="iterate" disabled>Iterate object</button>
                              </div>
                            </fieldset>
                            <p>
                              Output:
                              <p id="object">Test object</p>
                              <p id="iterator">Test iterator</p>
                            </p>
                          </div>`;

function lesson3Task1Logic() {
  const inputFromElement = document.getElementById("from");
  const inputToElement = document.getElementById("to");
  const buttonCreate = document.getElementById("create");
  const buttonIterate = document.getElementById("iterate");
  const outputObject = document.getElementById("object");
  const outputIterator = document.getElementById("iterator");
  let myIterable = {};

  buttonCreate.addEventListener("mouseover", function () {
    if (inputFromElement.value && inputToElement) {
      buttonCreate.disabled = false;
      buttonIterate.disabled = false;
    }
  });

  buttonCreate.addEventListener("click", function () {
    myIterable = {
      from: Number(inputFromElement.value),
      to: Number(inputToElement.value),
      [Symbol.iterator]() {
        if (
          typeof this.from !== "number" ||
          typeof this.to !== "number" ||
          isNaN(this.from) ||
          isNaN(this.to)
        ) {
          throw new Error("Both 'from' and 'to' properties must be numbers.");
        }
        if (this.from > this.to) {
          throw new Error(
            "'to' property must be greater than or equal to 'from' property."
          );
        }

        let current = this.from;
        return {
          next: () => {
            if (current <= this.to) {
              return { value: current++, done: false };
            } else {
              return { done: true };
            }
          },
        };
      },
    };

    outputObject.innerHTML = `<span>{ from: ${myIterable.from}, to: ${myIterable.to} }</span>`;
  });

  buttonIterate.addEventListener("click", function () {
    try {
      let result = "";
      for (let item of myIterable) {
        result += `${item}, `;
      }
      outputIterator.innerHTML = `<span>${result.slice(0, -2)}</span>`;
    } catch (error) {
      outputIterator.innerHTML = `<span>${error.message}</span>`;
    }
  });
}

export { lesson3Task1Html, lesson3Task1Logic };
