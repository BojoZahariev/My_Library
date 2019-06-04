let myLibrary = [];

// the constructor
function book(title, author, pages, stat) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.stat = stat;
}

function listBooks(books) {
	let book_names = [];
	for (let i = 0; i < books.length; i += 1) {
		book_names.push(books[i].title);
	}
	return book_names;
}
console.log(listBooks(myLibrary));

var submit = document.getElementById('submit');

submit.addEventListener('click', () => {
	addBookToLibrary();
	newForm.style.display = 'none';
});

function addBookToLibrary(title, author, pages, stat) {
	var values = [];
	title = document.getElementById('myForm').elements[0].value;
	values.push(title);
	author = document.getElementById('myForm').elements[1].value;
	values.push(author);
	pages = document.getElementById('myForm').elements[2].value;
	values.push(pages);
	stat = document.getElementById('myForm').elements[3].value;
	values.push(stat);

	book1 = new book(title, author, pages, stat);
	myLibrary.push(book1);

	var shelf = document.getElementById('books-container');
	var bookContainer = document.createElement('div');
	bookContainer.classList.add('bookContainer');
	bookContainer.dataset.index = myLibrary.length;
	shelf.appendChild(bookContainer);

	for (let i = 0; i < 5; i++) {
		var item = document.createElement('p');
		item.classList.add('item');
		bookContainer.appendChild(item);
		item.textContent = values[i];
	}

	//Delete button
	var btn = document.createElement('BUTTON');
	btn.classList.add('btn-delete');
	btn.textContent = 'Delete';
	bookContainer.appendChild(btn);

	btn.addEventListener('click', () => {
		//replace the obj with an empty string to keep the same index
		myLibrary.splice(bookContainer.dataset.index - 1, 1, ' ');
		bookContainer.remove();
		console.log(listBooks(myLibrary));
	});

	//toggle button
	var btn2 = document.createElement('BUTTON');
	btn2.classList.add('btn-toggle');
	btn2.textContent = 'OFF';
	bookContainer.appendChild(btn2);

	btn2.addEventListener('click', () => {
		var child = bookContainer.querySelectorAll('p');
		if (btn2.textContent == 'OFF') {
			btn2.textContent = 'ON';
			book1.stat = 'OFF';
			child[3].textContent = book1.stat;
		} else if (btn2.textContent == 'ON') {
			btn2.textContent = 'OFF';
			book1.stat = 'ON';
			child[3].textContent = book1.stat;
		}
	});
}

//New Entry
var newForm = document.getElementById('newForm');
var newEntryBtn = document.getElementById('new');
newEntryBtn.addEventListener('click', () => {
	newForm.style.display = 'block';
});
