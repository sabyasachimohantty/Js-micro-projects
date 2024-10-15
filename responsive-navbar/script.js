const hamburger = document.getElementById("hamburger")
const navElements = document.getElementById("nav-elements")
let active = 0

hamburger.onclick = function () {
    if (active == 0) {
        active = 1
        navElements.style.display = "flex"
    } else {
        active = 0
        navElements.style.display = "none"
    }
}

window.onresize = function () {
    if (window.innerWidth >= 640) {
        navElements.style.display = "flex"
    } else {
        navElements.style.display = "none"
    }
}