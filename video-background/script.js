const video = document.querySelector(".bg-video")
const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")

playBtn.onclick = function() {
    video.play()
}

pauseBtn.onclick = function() {
    video.pause()
}   

