const containerEl = document.querySelector(".container");


for(let index = 0 ; index < 30; index++ ) {
const colorContainerEl = document.createElement("div");
colorContainerEl.classList.add("color-container");
containerEl.appendChild(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".color-container");
generateColors () ;

function generateColors () {
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        
        colorContainerEl.style.backgroundColor = '#' +newColorCode;
        colorContainerEl.innerText = '#' +newColorCode;

    })
}
randomColor () 

function randomColor () {
    let chars = "0123456789abcde"
    let colorCodelength = 6;
    let colorCode = "";
    for (let index=0; index < colorCodelength; index++){
   const randomNum = Math.floor(Math.random() * chars.length);
   colorCode += chars.substring(randomNum, randomNum + 1);

        
     }
         return colorCode;
    
}