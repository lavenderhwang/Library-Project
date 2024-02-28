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

//Loops Through Library and Displays Book
function displayBooksOnPage(index) {
	console.log(myLibrary.length);
	for (let i = index; i < myLibrary.length; i++) {
		var newCard = document.createElement('div');
		newCard.classList.add('book-card');
		libraryContainer.appendChild(newCard);

		var author = document.createElement('p');
		var title = document.createElement('p');
		var numPages = document.createElement('p');
		var haveRead = document.createElement('button');

		var deleteButton = document.createElement('button');
		deleteButton.addEventListener('click', function (event) {
			libraryContainer.removeChild(newCard);
		});

		newCard.appendChild(title);
		newCard.appendChild(author);
		newCard.appendChild(numPages);
		newCard.appendChild(haveRead);
		newCard.appendChild(deleteButton);

		title.innerText = myLibrary[i].title;
		author.innerText = myLibrary[i].author;
		numPages.innerText = myLibrary[i].numPages;
		haveRead.innerText = myLibrary[i].haveRead;
		haveRead.addEventListener('click', () => {
			myLibrary[i].haveRead = !myLibrary[i].haveRead;
			if (myLibrary[i].haveRead) {
				haveRead.innerText = 'Read';
			} else {
				haveRead.innerText = 'Not Read';
			}
		});

		deleteButton.innerText = 'Delete';
	}
}

function showForm() {
	document.getElementById('new-book-form').style.display = 'block';
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
		document.getElementById('new-book-form').style.cssText = 'display: none;';
	} else {
		console.log('hi');
	}
});