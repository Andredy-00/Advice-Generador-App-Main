import { adviceComponent } from "./component-js/app.js";

document.querySelector('#render').innerHTML = 
` <h4>ADVICE #<span id="advice"></span></h4>
<div class="content-text">
  <p id="advice-paragraph">Press the dice to generate a random tip</p>
</div>
<!-- Linea -->
<div class="content-plus">
<img src="./images/pattern-divider-desktop.svg" alt="img plus">
</div>
<!-- Dador para evento aleatorio -->
<div id="active" class="content-img">
  <img src="./images/icon-dice.svg" alt="Imagen Dados">
</div>`;

const renderParagraph = document.querySelector('#advice-paragraph'),
      active = document.querySelector('#active'),
      countAdvice = document.querySelector('#advice');

active.addEventListener('click', () =>{
    adviceComponent(countAdvice, renderParagraph);
});



