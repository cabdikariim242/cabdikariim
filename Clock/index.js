const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateColor() {
    const currentTime = new Date ();

    const hour = new Date ().getHours();
    console.log(hour);
    
    const minute = new Date ().getMinutes();
    console.log(minute);

    const second = new Date ().getSeconds();
    console.log(second);
    setInterval(updateColor, 1000);

    const hourDeg = (hour / 12)*360;
    hourEl.style.transform = ` rotate(${hourDeg}deg)`;

   const minuteDeg = (minute / 60)*360;
    minuteEl.style.transform = ` rotate(${minuteDeg}deg)`;

    const secondDeg = (second / 60)*360;
    secondEl.style.transform = ` rotate(${secondDeg}deg)`;
}
updateColor();
setInterval(() => {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = (hr % 12) * 30 + min * 0.5;

  document.getElementById('second').style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}, 1000);
