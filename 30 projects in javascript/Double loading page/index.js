const containerEl = document.querySelector(".container")

const rightEl = document.querySelector(".right")
const leftEl = document.querySelector(".left");

rightEl.addEventListener("mouseover",() =>{
containerEl.classList.add("active-right")
});

rightEl.addEventListener("mouseleave",() =>{
containerEl.classList.remove("active-right")
});


leftEl.addEventListener("mouseover",() =>{
containerEl.classList.add("active-left")
});

leftEl.addEventListener("mouseleave",() =>{
containerEl.classList.remove("active-left")
})
