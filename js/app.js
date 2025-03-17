const myLibrary = [];

const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const newBtn = document.querySelector(".btn");
const addBtn = document.querySelector(".addBtn");
const cancelBtn = document.querySelector(".cancelBtn");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


addBookToLibrary("Harry Potter", "Billy", "1000", "Have not");
addBookToLibrary("Wizard", "Trump", "300", "Have");

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
        bookAuthor.textContent = `${book.author}`;
        bookPages.textContent = `${book.pages} pages`;
        bookRead.textContent = `${book.read} read yet.`;

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

addBtn.addEventListener("click", () => {
    dialog.close();
})

cancelBtn.addEventListener("click", () => {
    dialog.close();
})

displayBook(myLibrary);