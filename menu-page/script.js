const menuItems = [
    {
        name: "Bruschetta",
        type: "Breakfast",
        price: "$15.99",
        desc: "Bruschetta with creamy soft cheese, salmon and arugula",
        image: "./assets/bruschetta.png"
    },
    {
        name: "English Breakfast",
        type: "Breakfast",
        price: "$25.99",
        desc: "Traditional full english breakfast with fried eggs, sausage, tomato, beans, toast and bacon on a plate",
        image: "./assets/english-breakfast.png"
    },
    {
        name: "English Breakfast",
        type: "Lunch",
        price: "$15.99",
        desc: "Traditional full english breakfast with fried eggs, sausage, tomato, beans, toast and bacon on a plate",
        image: "./assets/english-breakfast.png"
    },
    {
        name: "English Breakfast",
        type: "Lunch",
        price: "$15.99",
        desc: "Traditional full english breakfast with fried eggs, sausage, tomato, beans, toast and bacon on a plate",
        image: "./assets/english-breakfast.png"
    },
    {
        name: "English Breakfast",
        type: "Lunch",
        price: "$15.99",
        desc: "Traditional full english breakfast with fried eggs, sausage, tomato, beans, toast and bacon on a plate",
        image: "./assets/english-breakfast.png"
    },
    {
        name: "English Breakfast",
        type: "Dinner",
        price: "$15.99",
        desc: "Traditional full english breakfast with fried eggs, sausage, tomato, beans, toast and bacon on a plate",
        image: "./assets/english-breakfast.png"
    },
    {
        name: "English Breakfast",
        type: "Dessert",
        price: "$15.99",
        desc: "Traditional full english breakfast with fried eggs, sausage, tomato, beans, toast and bacon on a plate",
        image: "./assets/english-breakfast.png"
    }
]

const menuList = document.querySelector(".menu-items")

const createCard = function(item) {
    const card = document.createElement("div")
    card.classList.add("card")

    const image = document.createElement("img")
    image.src = item.image

    const itemDesc = document.createElement("div")
    itemDesc.classList.add("item-desc")

    card.appendChild(image)
    card.appendChild(itemDesc)

    const itemHead = document.createElement("div")
    itemHead.classList.add("item-heading")

    const name = document.createElement("span")
    name.classList.add("name")
    name.innerHTML = item.name

    const price = document.createElement("span")
    price.classList.add("price")
    price.innerHTML = item.price

    itemHead.appendChild(name)
    itemHead.appendChild(price)

    const content = document.createElement("div")
    content.classList.add("content")
    content.innerHTML = item.desc

    itemDesc.appendChild(itemHead)
    itemDesc.appendChild(content)

    return card

}

const render = function(arr) {
    arr.map((item) => {
        const card = createCard(item)
        menuList.appendChild(card)
    })
}

const filterByType = function(type) {
    const filteredItems = menuItems.filter((item) => {
        return item.type === type
    })
    return filteredItems
}

const clearMenuItems = function() {
    while(menuList.firstChild) {
        menuList.removeChild(menuList.firstChild)
    }
}

window.onload = render(menuItems)

const options = document.querySelectorAll(".options button")

options.forEach((btn) => {
    btn.onclick = function() {
        clearMenuItems()
        const type = btn.innerHTML
        if (type === "All") {
            render(menuItems)
        } else {
            const filteredItems = filterByType(type)
            render(filteredItems)
        }    
    }
})