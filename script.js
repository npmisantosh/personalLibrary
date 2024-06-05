function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  };
}
//init an array to add books into
const myLibrary = [];

function addBook() {
  //add book to array
  console.log("entered addBooks");
}

function showBooks() {
  //show books
  console.log("entered ShowBooks");
}

function deleteBook() {
  console.log("entered deleteBooks");
  //delete books
}

function changeRead() {
  //get if read
  //change to whatever else
}
