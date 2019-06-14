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
	stat = 'Not Finished';
	values.push(stat);

	newBook();
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
	title = 'HYPERION';
	values.push(title);
	author = 'Dan Simmons';
	values.push(author);
	pages = 482;
	values.push(pages);
	stat = 'Not Finished';
	values.push(stat);
	newBook();

	//Book2
	values = [];
	title = 'FACTOTUM';
	values.push(title);
	author = 'Charles Bukowski';
	values.push(author);
	pages = 208;
	values.push(pages);
	stat = 'Not Finished';
	values.push(stat);
	newBook();

	//Book3
	values = [];
	title = '1984';
	values.push(title);
	author = 'George Orwell';
	values.push(author);
	pages = 237;
	values.push(pages);
	stat = 'Not Finished';
	values.push(stat);
	newBook();
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

	var child = bookContainer.querySelectorAll('p');
	child[2].style.display = 'none';
	child[3].style.display = 'none';

	//Delete button
	var btn = document.createElement('BUTTON');
	btn.classList.add('btn-delete');
	btn.textContent = 'Delete';
	bookContainer.appendChild(btn);

	btn.addEventListener('click', () => {
		//replace the obj with an empty string to keep the same index
		myLibrary.splice(bookContainer.dataset.index - 1, 1, '');
		bookContainer.remove();
	});

	btn.style.display = 'none';

	//toggle button
	var btn2 = document.createElement('BUTTON');
	btn2.classList.add('btn-toggle');
	btn2.textContent = 'Finished';
	bookContainer.appendChild(btn2);

	btn2.addEventListener('click', () => {
		if (btn2.textContent == 'Finished') {
			btn2.textContent = 'Not Finished';
			book1.stat = 'Finished';
			child[3].textContent = book1.stat;
			child[3].style.color = '#76C092';
		} else if (btn2.textContent == 'Not Finished') {
			btn2.textContent = 'Finished';
			book1.stat = 'Not Finished';
			child[3].textContent = book1.stat;
			child[3].style.color = '#FF6666';
		}
	});

	btn2.style.display = 'none';

	bookContainer.addEventListener('click', () => {
		bookContainer.classList.toggle('preview');
		if (btn.style.display === 'none') {
			btn.style.display = 'block';
			btn2.style.display = 'block';
			child[0].style.transform = 'none';
			child[0].style.padding = '20px';
			child[0].style.marginTop = '5px';
			child[0].style.fontSize = '40px';
			child[1].style.position = 'relative';
			child[1].style.textShadow = '2px 2px #000';
			child[2].style.display = 'block';
			child[3].style.display = 'block';
		} else {
			btn.style.display = 'none';
			btn2.style.display = 'none';
			child[0].style.transform = 'rotate(90deg)';
			child[0].style.padding = '5px';
			child[0].style.marginTop = '140px';
			child[0].style.fontSize = '25px';
			child[1].style.position = 'absolute';
			child[2].style.display = 'none';
			child[3].style.display = 'none';
		}
	});
}

onStart();
