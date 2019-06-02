let myLibrary = [];

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

var submit = document.getElementById('submit');

submit.addEventListener('click', () => {
	addBookToLibrary();
});

function addBookToLibrary() {
	var values = [];
	title = document.getElementById('myForm').elements[0].value;
	values.push(title);
	author = document.getElementById('myForm').elements[1].value;
	values.push(author);
	pages = document.getElementById('myForm').elements[2].value;
	values.push(pages);
	status = document.getElementById('myForm').elements[3].value;
	values.push(status);

	book1 = new book(title, author, pages, status);
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
	btn.textContent = bookContainer.dataset.index;
	bookContainer.appendChild(btn);

	btn.addEventListener('click', () => {
		console.log(bookContainer.dataset.index);
		//replace the obj with an empty str to keep the same index
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
			book1.status = 'OFF';
			child[3].textContent = book1.status;
		} else if (btn2.textContent == 'ON') {
			btn2.textContent = 'OFF';
			book1.status = 'ON';
			child[3].textContent = book1.status;
		}
	});
}
