const monthNameEl = document.getElementById("monthname")
const dayNameEl = document.getElementById("dayname")
const dayNumEl = document.getElementById("daynum")
const yearNumEl = document.getElementById("year")

const data = new Date ();

// const month = data.getMonth ();

monthNameEl.innerText = data.toLocaleDateString("en", {
    month:"long"
});

// const dayname = data.getDay ();

dayNameEl.innerText = data.toLocaleDateString("en", {
    weekday:"long"
});


yearNumEl.innerText = data.getFullYear ();

dayNumEl.innerText = data.getDate ();

