const lesson2Task1Html = `
                          <label for="array">Input elements a started array(separated with commas, without spaces and [ ]).</label>  
                          <input id="array" required">
                          <br/>
                          <label for="condition">Input a filter condition(without function word). <br/> For example you can use comparison operators like =, >, <.</label>
                          <input id="condition" required>
                          <button id="filter">Filter</button>
                          <p>The filtered array is: [ <span id="resultArray"></span> ]</p>
                          `;

function lesson2Task1Logic() {
  Array.prototype.myFilter = function (callback, optionalContext) {
    const filteredArray = [];
    const context = optionalContext || this;
    for (let i = 0; i < context.length; i++) {
      if (callback(context[i], i, context) === true) {
        filteredArray.push(context[i]);
      }
    }
    return filteredArray;
  };

  const startedArray = document.getElementById("array");
  const filterCondition = document.getElementById("condition");
  const resultArray = document.getElementById("resultArray");
  const filterButton = document.getElementById("filter");

  filterButton.addEventListener("click", function () {
    const clearedArray = startedArray.value
      .split(",")
      .filter((item) => item !== "," && item !== " " && item !== "");
    const filter = (item, index, array) =>
      eval(
        `${item} ${
          filterCondition.value[0] === "="
            ? "=" + filterCondition.value
            : filterCondition.value
        }`
      );
    const result = clearedArray.myFilter(filter, clearedArray);
    resultArray.innerHTML = `<span>${result}</span>`;
  });
}

export { lesson2Task1Html, lesson2Task1Logic };
