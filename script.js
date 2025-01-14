// array of books
const library = [];

// book object constructor
function Book(title, author, pages, read) {
  this.bookName = title;
  this.bookCreator = author;
  this.numberOfPages = pages;
  this.read = read;
  this.Info = function () {
    return `The ${this.bookName} by  ${this.bookCreator} , ${this.numberOfPages}, ${this.read}`;
  };
}

// function uses the constructor and pushes to the array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
}
// closes modal on click of x
const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  console.log("none");
});
// closes modal when clicking away from modal
const modal = document.getElementById("modal");
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
// function to display the books to the page
function displayBook() {
  const libraryContainer = document.querySelector(".library-container");
  libraryContainer.innerHTML = "";
  library.forEach((book, i) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `<h2>${book.bookName}</h2>
    <p>Author: ${book.bookCreator}</p>
    <p>Pages: ${book.numberOfPages}</p>
    <p>Status: ${book.read ? "Read" : "Not Read"}</p>
    <button class="remove-btn" data-index = "${i}">Remove</button>
    <button class="toggle-read-btn" data-index = "${i}">Mark as ${
      book.read ? "Unread" : "Read"
    }</button>
     `;

    libraryContainer.appendChild(bookCard);
  });
}
// buttons for remove and toggle read
const libraryContainer = document.querySelector(".library-container");
libraryContainer.addEventListener("click", (e) => {
  const removeButton = e.target.closest(".remove-btn");
  const toggleButton = e.target.closest(".toggle-read-btn");

  if (removeButton) {
    const index = removeButton.dataset.index;
    library.splice(index, 1);
    displayBook();
  }

  if (toggleButton) {
    const index = toggleButton.dataset.index;
    library[index].read = !library[index].read;
    displayBook();
  }
});

//function for book details, storing them in the library and displaying them
const newBookForm = document.querySelector("#new-book-form");

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);

  displayBook();

  modal.style.display = "none";

  newBookForm.reset();
});
