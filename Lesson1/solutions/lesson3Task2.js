const lesson3Task2Html = `<div id="lesson3Task2">
                            <fieldset>
                              <legend>Create objects</legend>
                              <div id="parameters">
                                <label for="name">Input a name</label>
                                <input id="name" type="text" required />
                                <label for="age">Input an age</label>
                                <input id="age" type="number" value="0" step="1" min="0" required />
                                <button id="create" disabled>Create objects</button>
                              </div>
                            </fieldset>  
                            <p>
                              Output:
                              <ul id="list">
                              </ul> 
                            </p>
                          </div>`;
function lesson3Task2Logic() {
  const inputNameElement = document.getElementById("name");
  const inputAgeElement = document.getElementById("age");
  const buttonCreate = document.getElementById("create");
  const listOutputElement = document.getElementById("list");

  let name = inputNameElement.value;
  let age = inputAgeElement.value;
  let variants = [];

  buttonCreate.addEventListener("mouseover", function () {
    name = inputNameElement.value;
    age = inputAgeElement.value;
    if (name && age) {
      buttonCreate.disabled = false;
      variants = [
        {
          description: "Object Literal",
          implementation: `let obj =  {<br />
                               name: "${name}",<br />
                               age: ${age}<br />                       
                          };`,
        },
        {
          description: "Using the 'new Object' Syntax",
          implementation: `let obj = new Object();<br />
                           obj.name = "${name}";<br/>
                           obj.age = ${age};`,
        },
        {
          description: "Using a Constructor Function",
          implementation: `function MyObject(value1, value2) {<br />
                               this.name = value1;<br />
                               this.age = value2;<br />
                           }<br />
                           <br />  
                           let obj = MyObject("${name}", ${age});`,
        },
        {
          description: "Using ES6 Classes",
          implementation: `class MyObject {<br />
                               constructor(value1, value2) {<br />
                                   this.name = value1;<br />
                                   this.age = value2;<br />
                               }<br />
                           }<br />
                           <br />   
                           let obj = new MyObject("${name}", ${age});`,
        },
        {
          description: "Using Object.create()",
          implementation: `let prototypeObj = {<br />
                               name: "${name}",<br />
                               age: ${age}<br />
                           }<br />
                           <br />    
                           let obj = Object.create(prototypeObj);`,
        },
        {
          description: "Using Factory Functions",
          implementation: `function createObj(value1, value2) {<br />
                               return {<br />
                                   name: value1,<br />
                                   age: value2<br />
                               };<br />           
                           }<br />
                           <br />   
                           let obj = createObject("${name}", ${age});`,
        },
        {
          description: "Using ES6 Spread Operator",
          implementation: `let obj1 = {name: "${name}"};<br />
                           let obj2 = {...obj1, age: ${age}};`,
        },
        {
          description: "Using Object.assign()",
          implementation: `let obj1 = {name: "${name}"};<br />
                           let obj2 = Object.assign({}, obj1, {age: ${age}});`,
        },
        {
          description: "Using JSON.parse() with JSON Strings",
          implementation: `let jsonString = '{""name": "${name}", "age": "${age}"}';<br />
                           let obj = JSON.parse(jsonString);`,
        },
        {
          description: "Using Object.fromEntries()",
          implementation: `let entries = [["name", "${name}"], ["age", "${age}"]];<br />
                           let obj = Object.fromEntries(entries);`,
        },
      ];
    }
  });

  buttonCreate.addEventListener("click", function () {
    listOutputElement.innerHTML = variants
      .map(
        (item, index) =>
          `<li>
        ${index + 1}. ${item.description}
        <br /> 
        <br /> 
        ${item.implementation}
      </li><br />`
      )
      .join("");
  });
}

export { lesson3Task2Html, lesson3Task2Logic };
