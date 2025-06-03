function toggleHam() {
        const navEl = document.querySelector(".nav");
        navEl.classList.toggle('nav-added');
    }

    function closeSidebar() {
        document.querySelector(".nav").classList.remove("nav-added");
    }
    document.addEventListener("DOMContentLoaded", () => {
  // Close when clicking close icon
  const closeIcon = document.querySelector(".close-icon");
  if (closeIcon) {
    closeIcon.addEventListener("click", closeSidebar);
  }

  // Close when clicking shadow
  const shadow = document.querySelector(".shadow");
  if (shadow) {
    shadow.addEventListener("click", closeSidebar);
  }
});

    // Optional: Close sidebar using the close icon
    document.addEventListener("DOMContentLoaded", function () {
        const closeIcon = document.querySelector(".close-icon");
        if (closeIcon) {
            closeIcon.addEventListener("click", closeSidebar);
        }
    });
    