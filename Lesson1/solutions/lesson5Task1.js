const lesson5Task1Html = `<div id="lesson5Task1">
                            <div class="sliderDialog">
                             <dialog id="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogMessage">
                              <p id="lesson5DialogMessage"></p>
                              <button autofocus id="close">Close</button>
                              </dialog>
                            </div>
                            <div id="drawBlock">
                            </div>
                            <div id="buttonsBlock">
                              <div id="createStack">
                                <fieldset>
                                  <legend>Create a new stack</legend>
                                  <label for="size">Input a stack size</label>
                                  <input id="size" type="number" value="1" step="1" min="1" max="10" />
                                  <button id="create">Create a new stack</button>
                                </fieldset>
                              </div>
                              <div id="addElement">
                                <fieldset>
                                  <legend>Add new element</legend>
                                  <label for="newElement">Input an element</label>
                                  <input id="newElement" type="number" value="0" step="1" min="0" max="10" />
                                  <button id ="add" disabled>Add new element</button>
                                </fieldset>
                              </div>
                              <button id="delete" disabled>Delete the last element</button>
                              <button id="peek" disabled>Show the last element</button>
                              <button id="check" disabled>Check if empty</button>
                              <button id="transformToArray" disabled>Create an array</button>
                              <div id="createFromEntity">
                                <fieldset>
                                  <legend>Transform to stack</legend>
                                  <label for="entity">Input an entity</label>
                                  <input id="entity" />
                                  <button id="transformToStack">Transform to stack</button>
                                </fieldset>
                              </div>
                            </div>
                          </div>`;

function lesson5Task1Logic() {
  class Stack {
    constructor(size = 10) {
      if (isNaN(Number(size)))
        throw new Error(`Your input: ${size} is invalid number`);
      this.length = size;
      this.stack = new Array();
    }

    push(element) {
      if (this.stack.length < this.length) {
        this.stack.push(element);
      } else {
        throw new Error("The stack is full");
      }
    }

    pop() {
      if (this.stack.length > 0) {
        this.stack.pop();
      } else {
        throw new Error("The stack is empty");
      }
    }

    peek() {
      return this.stack.at(-1) ?? null;
    }

    isEmpty() {
      return !Boolean(this.stack.length);
    }

    toArray() {
      return Array.from(this.stack);
    }

    static fromIterable(iterable) {
      if (iterable?.[Symbol.iterator]) {
        const stackFromIterable = new Stack(iterable.length);
        for (let character of iterable) {
          stackFromIterable.push(character);
        }
        return stackFromIterable;
      } else {
        throw new Error("The passed entity is not iterable");
      }
    }
  }

  const dialog = document.getElementById("dialog");
  const closeButton = document.getElementById(`close`);

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  let stack;
  const dialogMessage = document.getElementById("lesson5DialogMessage");

  function updateDrawBlock() {
    let drawBlockHTML = "";
    for (let i = stack.length; i > 0; i--) {
      drawBlockHTML +=
        i > stack.stack.length
          ? `<div id="availableIndex">Available item</div>`
          : `<div id="stackElement">${stack.stack[i - 1]}</div>`;
    }
    drawBlock.innerHTML = drawBlockHTML;
  }

  const ERROR_PREFIX = "Error: ";
  const RESULT_PREFIX = "Result: ";

  function showError(error) {
    dialogMessage.innerText = ERROR_PREFIX + error;
    dialog.showModal();
  }

  function showResult(result) {
    dialogMessage.innerText = RESULT_PREFIX + result;
    dialog.showModal();
  }

  const drawBlock = document.getElementById("drawBlock");
  const createStackButton = document.getElementById("create");
  createStackButton.addEventListener("click", function () {
    const stackSizeInput = document.getElementById("size").value;
    stack = new Stack(Number(stackSizeInput));

    updateDrawBlock();

    addElementButton.disabled = false;
    deleteElementButton.disabled = false;
    peekElementButton.disabled = false;
    checkButton.disabled = false;
    transformToArrayButton.disabled = false;
  });

  const addElementButton = document.getElementById("add");
  addElementButton.addEventListener("click", function () {
    const newElementInput = document.getElementById("newElement").value;
    if (stack.length > stack.stack.length) {
      stack.push(newElementInput);
      updateDrawBlock();
    } else {
      showError("The stack is full");
    }
  });

  const deleteElementButton = document.getElementById("delete");
  deleteElementButton.addEventListener("click", function () {
    if (stack.stack.length > 0) {
      stack.pop();
      updateDrawBlock();
    } else {
      showError("The stack is empty");
    }
  });

  const peekElementButton = document.getElementById("peek");
  peekElementButton.addEventListener("click", function () {
    showResult(stack.peek());
  });

  const checkButton = document.getElementById("check");
  checkButton.addEventListener("click", function () {
    showResult(stack.isEmpty());
  });

  const transformToArrayButton = document.getElementById("transformToArray");
  transformToArrayButton.addEventListener("click", function () {
    showResult(`[${stack.toArray()}]`);
  });

  const transformToStackButton = document.getElementById("transformToStack");
  transformToStackButton.addEventListener("click", function () {
    const entityInput = document.getElementById("entity").value;
    showResult(`[${Stack.fromIterable(entityInput).stack}]`);
  });
}

export { lesson5Task1Html, lesson5Task1Logic };
