//Objects array
let myLibrary = [];

//values storage
var values = [];

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

var form = document.getElementById('myForm');

//Submit button
var submit = document.getElementById('submit');
submit.addEventListener('click', () => {
	if (form.elements[0].value !== '' && form.elements[1].value !== '' && form.elements[2].value !== '') {
		addBookToLibrary();
		newForm.style.display = 'none';
	}
});

//Cancel button
var cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
	newForm.style.display = 'none';
});

//Add a new book trough the form
function addBookToLibrary() {
	values = [];
	title = form.elements[0].value;
	values.push(title);
	author = form.elements[1].value;
	values.push(author);
	pages = form.elements[2].value;
	values.push(pages);
	stat = 'ON';
	values.push(stat);

	newBook();
	listingBooks();
}

//New Entry
var newForm = document.getElementById('newForm');
var newEntryBtn = document.getElementById('new');
newEntryBtn.addEventListener('click', () => {
	newForm.style.display = 'block';
	form.elements[0].value = '';
	form.elements[1].value = '';
	form.elements[2].value = '';
});

//On load
function onStart() {
	//Book1
	values = [];
	title = 'Vinetou';
	values.push(title);
	author = 'Karl May';
	values.push(author);
	pages = 55;
	values.push(pages);
	stat = 'ON';
	values.push(stat);
	newBook();

	//Book2
	values = [];
	title = 'Something else';
	values.push(title);
	author = 'Same one else';
	values.push(author);
	pages = 49;
	values.push(pages);
	stat = 'ON';
	values.push(stat);
	newBook();

	//Book3
	values = [];
	title = 'Another thing';
	values.push(title);
	author = 'Other author';
	values.push(author);
	pages = 678;
	values.push(pages);
	stat = 'ON';
	values.push(stat);
	newBook();

	listingBooks();
}

function newBook() {
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
		myLibrary.splice(bookContainer.dataset.index - 1, 1, '');
		bookContainer.remove();
		console.log(listBooks(myLibrary));
		listingBooks();
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

//Display list
function listingBooks() {
	const listContainer = document.getElementById('list');

	//Clear the list every time to avoid stacking
	while (listContainer.firstChild) {
		listContainer.removeChild(listContainer.firstChild);
	}

	//New array copy of myLibrary, so to keep myLibrary indexes intact
	var arrayB = [];
	var newArray = myLibrary.concat(arrayB);

	//Clear the empty objects in the array
	Array.prototype.remove = function() {
		var what = arguments;
		var a = arguments;
		var L = a.length;
		var ax;
		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	};

	newArray.remove('');

	//Display the list cleared of empty objects
	for (let i = 0; i < newArray.length; i++) {
		var listItem = document.createElement('li');
		listItem.classList.add('listItem');
		listContainer.appendChild(listItem);
		listItem.textContent = newArray[i].title;
	}

	console.log(newArray);
}

onStart();
