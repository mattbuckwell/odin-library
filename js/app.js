// console.log("Hello from the library");

const myLibrary = [];

const container = document.querySelector(".container");

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
        const bookDesc = document.createElement("p");

        bookTitle.textContent = `${book.title}`;
        bookDesc.textContent = `by ${book.author}, ${book.pages} pages, ${book.read} read yet.`;

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookDesc);
        container.appendChild(bookCard);
        //console.log(`${book.title} by ${book.author}, ${book.pages} pages, ${book.read} read yet.`);
    }
}

displayBook(myLibrary);