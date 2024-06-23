const tasks = [
  [
    {
      description: `Try to confuse others with an unusual "console.log" using non-obvious JS tricks =)<br />
    <br />
    Important: the complexity of an expression should not lie in its length.
    <br />
    <br />
    <img src="./assets/Lesson1_task1_example.png" class="image" />`,
      githubLink:
        "https://github.com/raman-davidovich/Andersen_traineeship/blob/main/Lesson1/solutions/lesson1Task1.js",
    },
    {
      description: `Transform a number into a binary form.<br />
      <br />
      Optionally:<br />
      *output the number by any method<br />
      *receive a number from user by any input method.`,
      githubLink:
        "https://github.com/raman-davidovich/Andersen_traineeship/blob/main/Lesson1/solutions/lesson1Task2.js",
    },
  ],
  // [
  //   {
  //     description: `Write your own implementation of hte built-in array function filter. Call the function myFilter and make it so that any array can use this function as a "native" one. It must take a callback function as parameters and an optional parameter as an object that will be used as
  //       <strong>this</strong> in internal calls to this callback function.<br />
  //     Ultimately, your myFilter implementation should work exaclty like he built-in filter method. The callback function passed as parameter must also be called with the same paramenters as the original (element, index, array).`,
  //     githubLink: "",
  //   },
  //   {
  //     description: `It is necessary to reflash the global object a little.<br />
  //     Consider these three functions:<br />
  //     <br />
  //     <img src="./assets/Lesson2_task2_example.png" class="image"/>
  //     <br />
  //     <br />
  //     When calling alert(), the logic confirm(), prompt - alert(), confirm() - prompt() should work, feel free to use yourown order.<br />
  //     <br />
  //     *Additionally - try to do this as briefly as possible, in the least amount of steps. (By action we mean any operation - creating a variable, equating, calling a method)`,
  //     githubLink: "",
  //   },
  // ],
  // [
  //   {
  //     description: `Create a regular object and make it iterable. In this case, the iteration should proceed as follows:<br />
  //      All values fron the object's
  //        <strong>from</strong>
  //       property to the
  //       <strong>to</strong>
  //      property must be traversed one by one. (if to < from - an error should occur).<br />
  //     If to or from is not specified OR to or from are not numbers, an error should occur.<br />
  //     <br />
  //     <br />
  //     > Examples:<br />
  //     const myIterable = {from: 1, to: 4};<br />
  //     for (let item of myIterable) {<br />
  //       console.log(item); // 1,2,3,4<br />
  //     }<br />
  //     <br />
  //     const myIterable = {from: "aaa", to: 4};<br />
  //     for (let item of myIterable) { // Error!<br />
  //       console.log(item)<br />
  //     }`,
  //     githubLink: "",
  //   },
  //   {
  //     description: `You need to implement a function that will take a person's
  //       <strong>name</strong>
  //      and
  //       <strong>age</strong>
  //      as arguments and then return an array of objects. Each object must be created in a unique way.<br />
  //     Additionally - it is not necessary to write these properties as your own for the object, you can play with prototypes
  //     <br />
  //     <br />
  //     <img src="./assets/Lesson3_task2_example.png" class="image"/>
  //     `,
  //     githubLink: "",
  //   },
  // ],
  // [
  //   {
  //     description: `Create a Calculator class. The constructor accepts two numbers, if at least one is not valid, it throw an error. We do not consider Infinity and other special values of the number type to be valid numbers.Methods:<br />
  //     setX() - set the first number<br />
  //     setY() - set the second number <br />
  //     <br />
  //     logSum() - return the sum of the given numbers<br />
  //     logMul() - return the product of the given numbers<br />
  //     logSub() - return the difference of the given numbers<br />
  //     logDiv() - return the quotient of the given numbers, throws an error when dividing by 0.<br />
  //     <br />
  //     All methods of the second group should work correctly even if they are placed in a separate variable.<br />
  //     <br />
  //     const logSumRef = calculator.logSum;<br />
  //     console.log(logSumRef()); // still works`,
  //     githubLink: "",
  //   },
  // ],
  // [
  //   {
  //     description: `Create a Stack class.<br/>
  //     The Stack constructor must take the maximum number of elements in the stack as its only optional parameter. If the parameter is an invalid number, generate an error. If the parameter is not specified, set the maximum tack size to 10. <br/>
  //     <br/>
  //     Implement public methods:<br/>
  //     - push(elem) - add a new element to the stack (generate an error if the stack is full);<br/>
  //     - pop() - remove the top element of the stack and return it (generate an error of the stack is empty);<br/>
  //     - peek() - get the top element of the stack (return null if the stack is empty);<br/>
  //     - isEmpty() - returns Boolean value (whether the stack is empty or not);
  //     - toArray() - returns a new array consisting of stack elements.<br/>
  //     <br/>
  //     Implement static public methods:<br/>
  //     - fromIterable(Iterable) - returns a new Stack, the elements of which are the elements of the passed iterable entity. The maximum number of elements of such a stack must be equal to the length of this entity. If the entity is not iterable, generate an error.
  //     `,
  //     githubLink: ",",
  //   },
  // ],
];

export default tasks;
