let groceries = []
const messages = {
    create: "Item added successfully",
    delete: "Item deleted successfully",
    edit: "Item edited successfully"
}
const alert = document.querySelector(".alert")
const groceryEl = document.querySelector(".groceries")
const inputEl = document.querySelector(".input-field")
const form = document.querySelector("form")
const editBtn = document.getElementById("edit-btn")
const submitBtn = document.getElementById("submit-btn")
let editIndex;
const clearAllBtn = document.getElementById("clear-all-btn")
const editIcon = `<img src="assets/edit.svg" alt="edit">`
const deleteIcon = `<img src="assets/delete.svg" alt="delete">`

function renderGroceries () {
    groceries = JSON.parse(localStorage.getItem("groceries"))
    if (!groceries) {
        groceries = []
    }
    if (groceries.length !== 0) {
        clearAllBtn.classList.remove("hide")
    } else {
        clearAllBtn.classList.add("hide")
    }
    const groceryCards = groceries.map((grocery, i) => {
        return `<div class="grocery-item" id=${i}><p>${grocery}</p><span><button class="icons" id="edit">${editIcon}</button><button class="icons" id="delete">${deleteIcon}</button></span></div>`
    })
    .join("")
    groceryEl.innerHTML = groceryCards
    inputEl.value = ""
}

form.onsubmit = function (e) {
    e.preventDefault()
    if (inputEl.value === "") {
        return
    }
    groceries.push(inputEl.value)
    console.log(groceries)
    localStorage.setItem("groceries", JSON.stringify(groceries))
    renderGroceries()
    clearAllBtn.classList.remove("hide")
    window.alert(messages.create)
}

window.onload = function () {
    renderGroceries()
    console.log(groceries.length)
}

groceryEl.onclick = function (e) {
    let btnType = e.target.parentElement.id
    let index = parseInt(e.target.parentElement.parentElement.parentElement.id)
    if (btnType === "edit") {
        inputEl.value = groceries[index]
        editIndex = index
        submitBtn.classList.add("hide")
        editBtn.classList.remove("hide")  
    } else if (btnType === "delete") {
        groceries.splice(index, 1)
        localStorage.setItem("groceries", JSON.stringify(groceries))
        renderGroceries()
        if (groceries.length === 0) {
            clearAllBtn.classList.add("hide")
        }
        window.alert(messages.delete)
    } else {
        return
    }
}

editBtn.onclick = function () {
    groceries[editIndex] = inputEl.value
    localStorage.setItem("groceries", JSON.stringify(groceries))
    renderGroceries()
    submitBtn.classList.remove("hide")
    editBtn.classList.add("hide")
    window.alert(messages.edit)
}

clearAllBtn.onclick = function () {
    localStorage.clear()
    renderGroceries()
}