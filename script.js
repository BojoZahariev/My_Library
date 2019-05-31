let myLibrary = [{
        title: "Vinetou",
        author: "Karl May",
        pages: 450,
        status: "finished",
        comment: "Great book"
    },
    {
        title: "It",
        author: "Stephen King",
        pages: 550,
        status: "finished",
        comment: "Good book"
    }
];




// the constructor
function book(title, author, pages, status, comment) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.comment = comment;
}


var book;
book = new book("The Foundation", "Isak Isimov", 350, "read it", "good book")
myLibrary.push(book);

function addBookToLibrary() {
    // do stuff here
}


function listBooks(books) {
    let book_names = [];
    for (let i = 0; i < books.length; i += 1) {
        book_names.push(books[i].title);
    }
    return book_names;
}
console.log(listBooks(myLibrary));



//Form testing
function myFunction() {
    var x = document.getElementById("myForm").elements[0].value;
    var demo = document.getElementById("demo");
    demo.textContent = x;
}
