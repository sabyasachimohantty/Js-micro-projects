const slides = document.querySelectorAll(".slide")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

slides.forEach((slide, i) => {
    slide.style.left = `${i * 100}%`
})

let counter = 0
nextBtn.onclick = function () {
    counter = (counter + 1) % slides.length
    carousal()
}
prevBtn.onclick = function () {
    counter = (slides.length + counter - 1) % slides.length
    carousal()
}

function carousal() {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}