const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const all_cards = document.querySelector(".all_cards")

const submit = document.querySelector("#add");
let data = 0;

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(event) {
    event.preventDefault()
    data++
    if (!title.value || !author.value || !pages.value) {
        return alert("please fill the corresponding data")
    }

    new_title = title.value
    new_author = author.value
    new_pages = pages.value
    new_read = read.checked
    
    const new_book = new Book(new_title, new_author, new_pages, new_read)
    myLibrary.push(new_book)

    all_cards.insertAdjacentHTML("beforeend", display_book(new_book))

}


function display_book(book) {
    if (book.read === false) {
    return `<div class="card" data-book-count="${data}">
                <h3>${book.title}</h3>
                <h4>by ${book.author}</h4>
                <h4>${book.pages} pages</h4>
                <div class="buttons">
                    <button class="${book.read}" data-read="${book.read}" id="button1">read</button>
                    <button class="button2" id="button2">delete</button>
                </div>
            </div>`;
    }
    else {
        return `<div class="card" data-book-count="${data}">
        <h3>${book.title}</h3>
        <h4>by ${book.author}</h4>
        <h4>${book.pages} pages</h4>
        <div class="buttons">
            <button class="${book.read}" data-read="${book.read}" id="button1">unread</button>
            <button class="button2" id="button2">delete</button>
        </div>
    </div>`;
    }
}




submit.addEventListener("click", addBookToLibrary)


document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "button1") {
        const button = event.target;

        if (button.dataset.read === "true") {
            button.classList.remove("true");
            button.classList.add("false");
            button.textContent = "read";
            button.dataset.read = "false";
        } else {
            button.classList.remove("false");
            button.classList.add("true");
            button.textContent = "unread";
            button.dataset.read = "true";
        }
    }
});


document.addEventListener("click", function(event) {
    const element = event.target;
    if (element.className === "button2") {
        element.parentElement.parentElement.style.animationPlayState = "running";
        element.parentElement.parentElement.addEventListener("animationend", () => {
            element.parentElement.parentElement.remove();
        
        })
    }
})