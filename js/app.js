console.log("Hello from the library");

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


addBookToLibrary("Harry Potter", "Billy", "1000", "No");
addBookToLibrary("Wizard", "Trump", "300", "Yes");

console.log(myLibrary[0].title);
console.log(myLibrary[1].author);