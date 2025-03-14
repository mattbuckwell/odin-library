// console.log("Hello from the library");

const myLibrary = [];

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
        console.log(`${book.title} by ${book.author}, ${book.pages} pages, ${book.read} read yet.`);
    }
}

displayBook(myLibrary);