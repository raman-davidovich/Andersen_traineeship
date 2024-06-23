(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const a=[[{description:`Try to confuse others with an unusual "console.log" using non-obvious JS tricks =)<br />
    <br />
    Important: the complexity of an expression should not lie in its length.
    <br />
    <br />
    <img src="./assets/Lesson1_task1_example.png" class="image" />`,githubLink:"https://github.com/raman-davidovich/Andersen_traineeship/blob/main/Lesson1/solutions/lesson1Task1.js"},{description:`Transform a number into a binary form.<br />
      <br />
      Optionally:<br />
      *output the number by any method<br />
      *receive a number from user by any input method.`,githubLink:"https://github.com/raman-davidovich/Andersen_traineeship/blob/main/Lesson1/solutions/lesson1Task2.js"}]];function L(e){return e>=0?Number(e).toString(2):(Number(e)>>>0).toString(2)}const w=`<label for="number">Input a number</label>
                   <br/>
                   <input id="number" type="number" required>
                   <button id="transform" >Transform</button>
                   <p>Binary form of <span class="decimal"></span> is <span class="binary"></span>.
                   `;function S(){const e=document.getElementById("transform"),s=document.querySelector(".decimal"),o=document.querySelector(".binary");e.addEventListener("click",function(){const i=document.getElementById("number").value,t=L(i);s.innerText=i,o.innerText=t})}const B=[{expression:'<img src="./assets/example1.png" class="imageSlider" />',answer:2,explanation:'The string "5" is coerced to the number 5, and 5 - 3 results in 2.'},{expression:'<img src="./assets/example2.png" class="imageSlider" />',answer:1,explanation:"true is coerced to 1 and false to 0, so 1 + 0 results in 1."},{expression:'<img src="./assets/example3.png" class="imageSlider" />',answer:"null5",explanation:'null is coerced to the string "null", and concatenation with "5" results in "null5".'},{expression:'<img src="./assets/example4.png" class="imageSlider" />',answer:"111",explanation:'1 + "1" results in the string "11", and "11" + 1 results in "111".'},{expression:'<img src="./assets/example5.png" class="imageSlider" />',answer:'"[object Object]"',explanation:'[] is coerced to "" and {} to "[object Object]", so "" + "[object Object]" results in "[object Object]".'},{expression:'<img src="./assets/example6.png" class="imageSlider" />',answer:0,explanation:"In this context, {} is treated as an empty code block, and +[] coerces the empty array to 0."},{expression:'<img src="./assets/example7.png" class="imageSlider" />',answer:"fooNaN",explanation:'+"bar" results in NaN, so "foo" + NaN results in "fooNaN".'},{expression:'<img src="./assets/example8.png" class="imageSlider" />',answer:!0,explanation:"![] results in false, which is coerced to 0. [] is also coerced to 0 in a comparison, so 0 == 0 is true."},{expression:'<img src="./assets/example9.png" class="imageSlider" />',answer:!0,explanation:"null and undefined are equal when compared using == but not ===."},{expression:'<img src="./assets/example10.png" class="imageSlider" />',answer:"",explanation:'Both [] are coerced to "", so "" + "" results in "".'}],E=B.map((e,s)=>`                  
                    <div class="sliderDialog">
                      <dialog id="dialog${s}">
                      <h2>Answer: ${e.answer}</h2>
                      <p>Explanaton: ${e.explanation}</p>
                      <button autofocus id="close${s}">Close</button>
                      </dialog>
                      ${e.expression}
                      <button id="show${s}">Show the answer.</button>
                    </div>`).join(" "),T=`
  <h3>Try to guess an answer and check yourself using "show the answer"</h3>
  <div class="slider-container">
    <div class="slider">
      ${E}
    </div>
  <button class="prev-button" aria-label="Посмотреть предыдущий слайд">&lt</button>
  <button class="next-button" aria-label="Посмотреть следующий слайд">&gt</button>
  </div>
`;function I(){const e=document.querySelector(".slider"),s=document.querySelector(".prev-button"),o=document.querySelector(".next-button"),i=Array.from(e.querySelectorAll(".sliderDialog")),t=i.length;let n=0;s.addEventListener("click",r),o.addEventListener("click",p);function r(){n=(n-1+t)%t,l()}function p(){n=(n+1)%t,l()}function l(){i.forEach((u,m)=>{m===n?u.style.display="flex":u.style.display="none"})}l(),document.querySelectorAll('[id^="dialog"]').forEach((u,m)=>{const k=document.getElementById(`show${m}`),x=document.getElementById(`close${m}`);k.addEventListener("click",()=>{u.showModal()}),x.addEventListener("click",()=>{u.close()})})}const g=[[{html:T,logic:I},{html:w,logic:S}]];function q(e){const s=document.getElementById(`lesson${e}`);s.classList.add("active");const o=document.getElementById("information");if(a[e-1]){o.innerHTML=h(e),b();const t=document.getElementById("text");t.innerHTML=a[e-1][0].description,y(e,1)}else o.innerHTML=f();s.click(),document.getElementById("task1").click()}function f(){return`<div class="mock">
      <h2>Comming soon...</h2>
    </div>`}function h(e){return`<nav class="tasks">
            ${a[e-1].map((o,i)=>`<button id="task${i+1}" class="task">Task ${i+1}</button>`).join("")}
          </nav>
          <div id="assignment">
            <div id="description">
              <h3>Description</h3>
              <div id="text"></div>
            </div>
            <div id="result">
              <h3>Result</h3>
              <div class="solution"> 
              </div>
              <a href="#" target="_blank" id="github">Show code</a>
            </div>
          </div>
  `}function b(){document.getElementById("task1").classList.add("active")}function y(e,s){const o=document.querySelector(".solution");o.innerHTML=g[e-1][s-1].html,g[e-1][s-1].logic(),document.getElementById("github").setAttribute("href",a[e-1][s-1].githubLink)}const v=1;let c=v,d=1;const $=document.querySelectorAll(".lesson");$.forEach(e=>e.addEventListener("click",function(){c=e.id.at(-1),d=1,document.querySelector(".lessons > .active").classList.remove("active"),this.classList.add("active");const o=document.getElementById("information");if(a[c-1]){o.innerHTML=h(c),b(),document.querySelectorAll(".task").forEach(r=>r.addEventListener("click",function(){d=r.id.at(-1),document.querySelector(".task.active").classList.remove("active"),this.classList.add("active");const l=document.getElementById("text");l.innerHTML=a[c-1][d-1].description,y(c,d)}));const t=document.getElementById("text");t.innerHTML=a[c-1][d-1].description,document.getElementById("task1").click()}else o.innerHTML=f()}));q(v);
