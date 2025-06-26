const clock= document.getElementById('clock');
let date = new Date();
function updateClock() {
    date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);