const myLibrary = [];

const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const newBtn = document.querySelector(".btn");
const addBtn = document.querySelector(".addBtn");
const cancelBtn = document.querySelector(".cancelBtn");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    if (title === "" || author === "" || pages === "") {
        console.log("ERROR!!");
    } else {
        if (readInput.checked === true || read === true) {
            read = "YES";
        } else {
            read = "NO"
        }
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
    }
}


addBookToLibrary("Harry Potter", "Billy", "1000", true);
addBookToLibrary("Wizard", "Trump", "300", true);

function displayBook(library) {
    for (const book of library) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("h2");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("p");

        bookCard.classList.add("card");
        bookTitle.classList.add("title");
        bookAuthor.classList.add("author");
        bookPages.classList.add("pages");
        bookRead.classList.add("read");

        bookTitle.textContent = `${book.title}`;
        bookAuthor.textContent = `by ${book.author}`;
        bookPages.textContent = `${book.pages} pages`;
        bookRead.textContent = `Read: ${book.read}`;

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        container.appendChild(bookCard);
    }
}

newBtn.addEventListener("click", () => {
    dialog.showModal();
});

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    displayBook(myLibrary);
    dialog.close();
})

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})

//displayBook(myLibrary); 