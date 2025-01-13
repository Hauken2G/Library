// array of books
const myLibrary = [];

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

// loops through the array and displays each book on page
function bookDisplay() {
  myLibrary.forEach((book) => {});
}
