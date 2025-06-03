const timerEl = document.getElementById("timer")
const startEl = document.getElementById("start")
const stopEl =  document.getElementById("stop")
const resetEl = document.getElementById("reset")

let intreval;
let timeLeft = 1500;


function updateTimer() {
    let minutes = Math.floor(timeLeft /60);
    let seconds = timeLeft % 60;
    let fotmattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2 , "0")}`;

    timerEl.innerHTML = fotmattedTime;

}    


function startTimer () {
    intreval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if (timeLeft === 0){
            clearInterval(intreval);
            alert("Time's up");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(intreval);
}


function resetTimer() {
    clearInterval(intreval);
    timeLeft = 1500;
    updateTimer(); 
}



startEl.addEventListener("click", startTimer);

stopEl.addEventListener("click", stopTimer);

resetEl.addEventListener("click", resetTimer);

console.log("find", 100 % 6);
