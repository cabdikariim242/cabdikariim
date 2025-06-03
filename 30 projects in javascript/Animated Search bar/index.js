const searchContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", ()=> {
        // searchContainerEl.classList.remove("active")

    searchContainerEl.classList.toggle("active")
})