const endDate = new Date("2024-11-05")
const date = document.getElementById("date")
const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours")
const minEl = document.getElementById("minutes")
const secEl = document.getElementById("seconds")

date.innerHTML = endDate.toDateString()

const intervalId = setInterval(() => {
    let diff = Math.floor((endDate - new Date()) / 1000)
    if (diff < 0) {
        secEl.innerHTML = 0
        minEl.innerHTML = 0
        hourEl.innerHTML = 0
        dayEl.innerHTML = 0
        clearInterval(intervalId)
    }
    const seconds = diff % 60
    secEl.innerHTML = seconds
    diff = Math.floor(diff / 60)
    const minutes = diff % 60
    minEl.innerHTML = minutes
    diff = Math.floor(diff / 60)
    const hours = diff % 60
    hourEl.innerHTML = hours
    diff = Math.floor(diff / 24)
    const days = diff 
    dayEl.innerHTML = days
}, 1000);
