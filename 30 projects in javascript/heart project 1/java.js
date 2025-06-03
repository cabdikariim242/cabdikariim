const bodyEl = document.querySelector('body');

bodyEl.addEventListener("mousemove", (e) => {
    const spanEl = document.createElement("span");
    bodyEl.appendChild(spanEl);
    const size = Math.random()*100;

    spanEl.style.height = size +'px';
    spanEl.style.width = size +'px';
    spanEl.style.left = `${e.pageX}px`;
    spanEl.style.top = `${e.pageY}px`;

    setTimeout(() => {
        spanEl.remove();
    }, 3000)
})

