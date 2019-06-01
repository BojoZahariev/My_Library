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


/*
var book;
book = new book("The Foundation", "Isak Isimov", 350, "read it", "good book")
myLibrary.push(book); */

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
var submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    myFunction();

});

function myFunction() {
    title = document.getElementById("myForm").elements[0].value;
    author = document.getElementById("myForm").elements[1].value;
    pages = document.getElementById("myForm").elements[2].value;
    status = document.getElementById("myForm").elements[3].value;
    comment = document.getElementById("myForm").elements[4].value;

    var titletext = document.getElementById("titletext");
    var authortext = document.getElementById("authortext");
    var pagestext = document.getElementById("pagestext");
    var statustext = document.getElementById("statustext");
    var commenttext = document.getElementById("commenttext");

    book1 = new book(title, author, pages, status, comment)
    myLibrary.push(book1);
    console.log(listBooks(myLibrary));

    titletext.textContent = title;
    authortext.textContent = author;
    pagestext.textContent = pages;
    statustext.textContent = status;
    commenttext.textContent = comment;
}
