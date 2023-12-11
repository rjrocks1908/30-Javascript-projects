const inputBox = document.getElementById("input-box")
const button = document.querySelector("button")
const listContainer = document.getElementById("list-container")

button.addEventListener("click", (event) => {
    if (inputBox.value) {
        addTask()
    } else {
        alert("Please enter a task")
    }
    saveData()
})

listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove()
    }
    saveData()
}, false)

function addTask() {
    const li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    const span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    inputBox.value = ""
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

loadData()