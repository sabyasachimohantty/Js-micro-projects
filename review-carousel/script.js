const reviews = [
    {
        name: "Tim Tastic",
        title: "Weeb Developer",
        content: "A network is a set of devices that are connected with a physical media link. In a network, two or more nodes are connected by a physical link or two or more networks are connected by one or more nodes.",
        image: "tim.png"
    },
    {
        name: "Bob Mewwrly",
        title: "Weeb Developer",
        content: "Network topology specifies the layout of a computer network. It shows how devices and cables are connected to each other.",
        image: "bob.png"
    },
    {
        name: "Jerry Jonnas",
        title: "Weeb Developer",
        content: "VPN or the Virtual Private Network is a private WAN (Wide Area Network) built on the internet. It allows the creation of a secured tunnel (protected network) between different networks using the internet (public network).",
        image: "jerry.png"
    },
    {
        name: "Alice Chan",
        title: "Mewbile Developer",
        content: "An IP address is a 32-bit dynamic address of a node in the network. An IPv4 address has 4 octets of 8-bit each with each number with a value up to 255. IPv4 classes are differentiated based on the number of hosts it supports on the network.",
        image: "alice.png"
    },
    {
        name: "Brad Shitt",
        title: "Mewbile Developer",
        content: "DNS is an acronym that stands for Domain Name System.DNS was introduced by Paul Mockapetris and Jon Postel in 1983.",
        image: "brad.png"
    }
]

const leftIcon = document.getElementById("left-icon")
const rightIcon = document.getElementById("right-icon")
const surprise = document.getElementById("surprise")

let i = 0

window.onload = renderCard(0)

function renderCard(index) {
    document.getElementById("name").innerHTML = reviews[index].name
    document.getElementById("title").innerHTML = reviews[index].title
    document.getElementById("content").innerHTML = reviews[index].content
    document.getElementById("profile").src = `./assets/${reviews[index].image}`
}

leftIcon.onclick = function () {
    i = (i + 1) % reviews.length;
    renderCard(i)
}

rightIcon.onclick = function () {
    i = (reviews.length + i - 1) % reviews.length;
    renderCard(i)
}

surprise.onclick = function () {
    i = Math.floor(Math.random() * reviews.length)
    renderCard(i)
}
