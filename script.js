const display = document.getElementById("display")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
const lap = document.getElementById("lap")
const list = document.getElementById("list")

let minutes = 0;
let hour = 0;
let second = 0;
let milisecond = 0;
let timer = null;

start.addEventListener("click", () => {
    if (timer != null) {
        return;
    }
    timer = setInterval(() => {
        milisecond++;

        if (milisecond == 100) {
            second++;
            milisecond = 0;
        }
        if (second == 60) {
            minutes++;
            second = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        updateTimer();
    }, 10)
})
stop.addEventListener("click", () => {
    clearInterval(timer)
    timer = null;
})
reset.addEventListener("click", () => {
    clearInterval(timer)
    timer = null;
    minutes = 0;
    hour = 0;
    second = 0;
    milisecond = 0;
    updateTimer()
})
lap.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = display.innerText;
    list.appendChild(li);
})
function updateTimer() {
    let h = hour < 10 ? "0" + hour : hour
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = second < 10 ? "0" + second : second
    let ms = milisecond < 10 ? "0" + milisecond : milisecond


    display.innerText = `${hour}:${minutes}:${second}:${milisecond}`
}