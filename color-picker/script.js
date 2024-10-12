const colors = ["Salmon", "Teal", "Royalblue", "Lightseagreen", "Lavenderblush"]
const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

const button = document.getElementById("btn")
const mode1 = document.getElementById("mode-1")
const mode2 = document.getElementById("mode-2")
let active = 1
if (mode1.style.color === "blue") {
    active = 1
} else {
    active = 2
}

mode2.onclick = function () {
    document.getElementById("mode-1").style.color = 'black'
    document.getElementById("mode-2").style.color = "blue"
    document.getElementById("content").innerHTML = "Background Color: " + "#000000"
    document.getElementById("container").style.backgroundColor = "#000000"
    active = 2
}

mode1.onclick = function () {
    document.getElementById("mode-1").style.color = 'blue'
    document.getElementById("mode-2").style.color = "black"
    document.getElementById("content").innerHTML = "Background Color: " + "Salmon"
    document.getElementById("container").style.backgroundColor = "salmon"
    active = 1
}

button.onclick = function () {
    if (active === 1) {
        const i = Math.floor(Math.random() * colors.length)
        document.getElementById("container").style.backgroundColor = colors[i].toLowerCase()
        document.getElementById("content").innerHTML = "Background Color: " + colors[i]
    } else {
        let hexColor = "#"
        for (let index = 0; index < 6; index++) {
            const i = Math.floor(Math.random() * hexValues.length)
            hexColor = hexColor + hexValues[i]
        }
        document.getElementById("container").style.backgroundColor = hexColor
        document.getElementById("content").innerHTML = "Background Color: " + hexColor
    }

}




