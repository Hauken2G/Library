// array of books
const Library = [];

// book object constructor
function Book(title, author, pages, read) {
  this.bookName = title;
  this.bookCreator = author;
  this.numberOfPages = pages;
  this.read = read;
  this.Info = function () {
    return `The ${bookName} by  ${this.bookCreator} , ${this.numberOfPages}, ${this.read}`;
  };
}

// hard coded Book
const theHobbit = new Book(
  "Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "the book has been read."
);

// function uses the constructor and pushes to the array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
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

// function displayBook() {
//  const libraryContainer = document.querySelector(".library-container");
// Library.forEach((book) => {
//   const book = Library[i];
//  const bookCard = document.createElement("div");
//  bookCard.classList.add("book-card");
//  });
// }
// libraryContainer.appendChild(bookCard);
