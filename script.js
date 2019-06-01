let myLibrary = [{
        title: "Vinetou",
        author: "Karl May",
        pages: 450,
        status: "finished",
    },
    {
        title: "It",
        author: "Stephen King",
        pages: 550,
        status: "finished",
    }
];




// the constructor
function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}



function listBooks(books) {
    let book_names = [];
    for (let i = 0; i < books.length; i += 1) {
        book_names.push(books[i].title);
    }
    return book_names;
}
console.log(listBooks(myLibrary));



var submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    addBookToLibrary();

});

function addBookToLibrary() {
    var values = [];
    title = document.getElementById("myForm").elements[0].value;
    values.push(title);
    author = document.getElementById("myForm").elements[1].value;
    values.push(author);
    pages = document.getElementById("myForm").elements[2].value;
    values.push(pages);
    status = document.getElementById("myForm").elements[3].value;
    values.push(status);

    book1 = new book(title, author, pages, status)
    myLibrary.push(book1);
    console.log(listBooks(myLibrary));

    var shelf = document.getElementById("books-container")
    var bookContainer = document.createElement("div")
    bookContainer.classList.add('bookContainer');
    shelf.appendChild(bookContainer);

    for (let i = 0; i < 5; i++) {
        var item = document.createElement('p');
        item.classList.add('item');
        bookContainer.appendChild(item);
        item.textContent = values[i];
    }


}
