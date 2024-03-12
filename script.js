const myLibrary = [];

//Book Constructor

function Book(title, author, numPages, haveRead) {
	this.title = title;
	this.author = author;
	this.numPages = numPages;

	if (haveRead) {
		this.haveRead = 'Read';
	} else {
		this.haveRead = 'Not Read';
	}

	this.info = function () {
		return `"${this.title} by ${this.author}, ${this.numPages}, ${this.haveRead}"`;
	};
}

//Adds Book to Library

function addBookToLibrary(book) {
	myLibrary.push(book); /*return length*/
}

var libraryContainer = document.querySelector('.library-container');

var bookCount = 0;
var pageCount = 0;

var bookCountDisp = document.querySelector('.book-count');
var pageCountDisp = document.querySelector('.page-count');

//Loops Through Library and Displays Book
function displayBooksOnPage(index) {
	for (let i = index; i < myLibrary.length; i++) {
		var newCard = document.createElement('div');
		newCard.classList.add('book-card');
		libraryContainer.appendChild(newCard);
		bookCount++;
		console.log(bookCount);

		var author = document.createElement('p');
		var title = document.createElement('p');
		var numPages = document.createElement('p');
		var buttonContainer = document.createElement('div');
		var haveRead = document.createElement('button');
		var deleteButton = document.createElement('button');

		bookCountDisp.innerText = bookCount;

		newCard.appendChild(title);
		title.classList.add('title');
		newCard.appendChild(author);
		author.classList.add('author');
		newCard.appendChild(numPages);
		numPages.classList.add('numPages');
		buttonContainer.appendChild(haveRead);
		haveRead.classList.add('haveRead');
		buttonContainer.appendChild(deleteButton);
		deleteButton.classList.add('deleteButton');
		newCard.appendChild(buttonContainer);
		buttonContainer.classList.add('buttonContainer');

		title.innerText = myLibrary[i].title;
		author.innerText = myLibrary[i].author;
		numPages.innerText = Math.round(myLibrary[i].numPages) + ' pages';
		pageCount += Math.round(myLibrary[i].numPages);
		haveRead.innerText = myLibrary[i].haveRead;

		pageCountDisp.innerText = pageCount;

		haveRead.addEventListener('click', () => {
			myLibrary[i].haveRead = !myLibrary[i].haveRead;

			if (myLibrary[i].haveRead) {
				haveRead.innerText = 'Read';
			} else {
				haveRead.innerText = 'Not Read';
			}
		});

		deleteButton.innerText = 'Delete';
		deleteButton.addEventListener('click', function (event) {
			libraryContainer.removeChild(newCard);
			bookCount--;
			bookCountDisp.innerText = 'Book Count: ' + bookCount;
			pageCount -= Math.round(myLibrary[i].numPages);
			pageCountDisp.innerText = 'Page Count: ' + pageCount;
		});
	}
}

function showForm() {
	document.getElementById('new-book-form').classList.add('show-form');
}

//connect the user input in the form to a new card

function validateForm() {
	if (
		(document.getElementById('title').value.length == 0) |
		(document.getElementById('author').value.length == 0) |
		(document.getElementById('numPages').value == 0)
	) {
		return false;
	}
	return true;
}

var submitForm = document.getElementById('submitButton');
submitForm.addEventListener('click', () => {
	if (validateForm()) {
		var newBook = new Book(
			document.getElementById('title').value,
			document.getElementById('author').value,
			document.getElementById('numPages').value,
			document.getElementById('haveRead').checked
		);

		addBookToLibrary(newBook);
		displayBooksOnPage(myLibrary.length - 1);
		console.log(newBook);

		document.getElementById('new-book-form').reset();
		document
			.getElementById('new-book-form')
			.classList.replace('show-form', 'new-book-form');
	} else {
		console.log('hi');
	}
});
