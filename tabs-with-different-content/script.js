const tabs = document.querySelectorAll(".btn")
const contents = document.querySelectorAll(".content")
let contentId = "history"
let prevContentId = "history"

tabs.forEach((tab) => {
    tab.onclick = () => {
        tab.classList.add("active")
        prevContentId = contentId
        contentId = tab.id.split("-")[0]
        contents.forEach((content) => {
            if (content.id === prevContentId) {
                content.classList.add("hide")
            }
            if (content.id === contentId) {
                content.classList.remove("hide")
            }
        })
        tabs.forEach((remainTab) => {
            if (remainTab !== tab) {
                remainTab.classList.remove("active")
            }
        })
    }
})


