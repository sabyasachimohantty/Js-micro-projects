let count = 0
const countElement = document.getElementById("count")
const increase = document.getElementById("increase-btn")
const reset = document.getElementById("reset-btn")
const decrease = document.getElementById("decrease-btn")

increase.onclick = function () {
    count += 1
    countElement.innerHTML = count
}

reset.onclick = function () {
    count = 0
    countElement.innerHTML = count
}

decrease.onclick = function () {
    count -= 1
    countElement.innerHTML = count
}