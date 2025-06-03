const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('mouseover', (event) => {
const x = event.pageX - buttonEl.offsetLeft;
const y = event.pageY - buttonEl.offsetTop;


buttonEl.style.setProperty("--xpos",  x + "px");
buttonEl.style.setProperty("--ypos",  y + "px");

})