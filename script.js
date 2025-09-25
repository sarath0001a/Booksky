let popupoverlay = document.querySelector(".popup-overlay")
let popupbox = document.querySelector(".popup-box")
let addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

let cancelbutton = document.getElementById("cancel-popup")

cancelbutton.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})


let container = document.querySelector(".container")
let addbook = document.getElementById("add-book")
let booktitle = document.getElementById("book-title-input")
let bookauther = document.getElementById("book-auther-input")
let bookdescription = document.getElementById("book-description")

addbook.addEventListener("click", function (event) {
    event.preventDefault()


    let div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2> 
    <h5>${bookauther.value}</h5>
    <p>${bookdescription.value}</p>
 <button onclick="deletebook(event)">delete</button>
    `

    container.append(div)

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}