const imageContainerEl = document.querySelector(".image-container")

const buttonEl = document.querySelector(".btn")

buttonEl.addEventListener('click', () => {
    
    imageNum = 10;
    
    addNewImage();
})

function addNewImage () {
    for (let i= 0; i < imageNum; i++) {
const newImageEl = document.createElement("img")
        imageContainerEl.appendChild(newImageEl);
    newImageEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random () *2000)}`
}
}








