const modal = document.getElementById("modal")
const closeIcon = document.getElementById("close-icon")
const createModal = document.getElementById("create-modal")

createModal.onclick = function () {
    modal.style.display = "flex"
}

closeIcon.onclick = function () {
    modal.style.display = "none"
}