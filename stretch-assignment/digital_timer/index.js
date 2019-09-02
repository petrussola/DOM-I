let intervalId = window.setInterval(cb, 10);
let cumulatedSecondTens = 0;
let cumulatedSeconds = 0;
let cumulatedmsHundred = 0;
let cumulatedmsTens = 0;
const secondTens = document.getElementById("secondTens");
const seconds = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const timer = document.querySelectorAll(".digits div");

function cb() {
    cumulatedmsTens += 1;
    if (cumulatedmsTens === 10) {
        incrementmsHundreds();
    }

    if (cumulatedmsHundred === 10) {
        incrementSeconds();
    }
    if (cumulatedSeconds === 10 ) {
        incrementTens();
        timer.forEach( item => item.style.color = "red");
    }

    secondTens.textContent = cumulatedSecondTens;
    seconds.textContent = cumulatedSeconds;
    msHundreds.textContent = cumulatedmsHundred;
    msTens.textContent = cumulatedmsTens;
}

function stop() {
    secondTens.textContent = 1;
    seconds.textContent = 0;
    window.clearInterval(intervalId)
}

function incrementmsHundreds() {
    cumulatedmsTens = 0;
    cumulatedmsHundred += 1;
}

function incrementSeconds() {
    cumulatedmsTens = 0;
    cumulatedmsHundred = 0;
    cumulatedSeconds += 1;
}

function incrementTens(){
    cumulatedmsTens = 0;
    cumulatedmsHundred = 0;
    cumulatedSeconds = 0;
    cumulatedSecondTens = 1;
    stop();
}

console.log(timer);
