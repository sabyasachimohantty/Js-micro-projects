const toggleSidebar = document.getElementById("toggle-btn")
const sidebarEl = document.getElementById("sidebar")
let active = 0

toggleSidebar.onclick = function () {
    if (active) {
        active = 0
        sidebarEl.style.transform = "translateX(0%)"
    } else {
        active = 1
        sidebarEl.style.transform = "translateX(-100%)"
    }
}