const navBar = document.querySelector(".navbar")
const backToTop = document.querySelector(".back-to-top")
const year = document.querySelector(".date")
const date = new Date().getFullYear();

window.onscroll = function () {
    // navbar
    if (document.documentElement.scrollTop > 16) {
        navBar.classList.add("nav-fixed")
    } else {
        navBar.classList.remove("nav-fixed")
    }

    // back to top button
    if (document.documentElement.scrollTop > screen.height) {
        backToTop.style.display = "block"
    } else {
        backToTop.style.display = "none"
    }
}

year.innerHTML = date
