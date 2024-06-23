function transformToBinary(number) {
  if (number >= 0) {
    return Number(number).toString(2);
  } else {
    return (Number(number) >>> 0).toString(2);
  }
}

const task2HTML = `<label for="number">Input a number</label>
                   <br/>
                   <input id="number" type="number" required>
                   <button id="transform" >Transform</button>
                   <p>Binary form of <span class="decimal"></span> is <span class="binary"></span>.
                   `;

function logicTask2() {
  const transformButton = document.getElementById("transform");
  const decimalForm = document.querySelector(".decimal");
  const binaryForm = document.querySelector(".binary");

  transformButton.addEventListener("click", function () {
    const input = document.getElementById("number").value;
    const result = transformToBinary(input);
    decimalForm.innerText = input;
    binaryForm.innerText = result;
  });
}

export { task2HTML, logicTask2 };
