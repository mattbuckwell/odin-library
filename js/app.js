const myLibrary = [];

const container = document.querySelector(".container");
// clean up the code here ----
const holding = document.createElement("div");
container.appendChild(holding);
//-------
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
    if (title === '' || author === '' || pages === '') {
        alert("All fields need to be filled!");
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

function deleteBook(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (id === myLibrary[i].id) {
            console.log("sup!");
            myLibrary.splice(id, 1);
        }
    }
}


addBookToLibrary("Harry Potter", "Billy", "1000", true);
addBookToLibrary("Wizard", "Trump", "300", true);

function displayBook(library) {
    // clean up ----
    holding.innerHTML = "";
    // -----
    for (const book of library) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("h2");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("button");
        const deleteBtn = document.createElement("button");

        bookCard.classList.add("card");
        bookTitle.classList.add("title");
        bookAuthor.classList.add("author");
        bookPages.classList.add("pages");
        bookRead.classList.add("read");
        deleteBtn.classList.add("delete");

        bookTitle.textContent = `${book.title}`;
        bookAuthor.textContent = `by ${book.author}`;
        bookPages.textContent = `${book.pages} pages`;
        bookRead.textContent = `Read: ${book.read}`;
        deleteBtn.textContent = "Delete book";

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(deleteBtn);
        holding.appendChild(bookCard);

        deleteBtn.addEventListener("click", () => {
            deleteBook(book.id);
            bookCard.remove();
        })

        bookRead.addEventListener("click", () => {
            if(book.read === "YES") {
                book.read = "NO";
            } else {
                book.read = "YES";
            }
            bookRead.textContent = `Read: ${book.read}`;
        })
    }
}

newBtn.addEventListener("click", () => {
    dialog.showModal();
});

addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    dialog.close();
    displayBook(myLibrary);
})

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})

displayBook(myLibrary); 