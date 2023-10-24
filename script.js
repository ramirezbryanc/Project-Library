const myLibrary = [];

// Converted the previous constructor function into a factory function
function createBook (title, author, pages, readStat) {
    const bookTitle = title;
    const bookAuthor = author;
    const bookPages = pages;
    const bookStat = readStat;
    const bookInfo = function () {
        return `${bookTitle} by ${bookAuthor}, ${bookPages} pages, ${bookStat}`
    }
    return {bookTitle, bookAuthor, bookPages, bookStat, bookInfo}
}

function addToLibrary (book) {
    myLibrary.push(book);
}

// Populate the library array with initial books.
const placeholder = createBook("Title", "Author", "Pages", false);
const witcher = createBook("The Witcher: The Last Wish", "Andrzej Sapkowski", "288", true);
const book2 = createBook("Book2", "bigbossbry", "0", false);
const book3 = createBook("Book3", "bigbossbry", "0", false);

addToLibrary(placeholder);
addToLibrary(witcher);
addToLibrary(book2);
addToLibrary(book3);

// Looping function
const bookShelf = document.querySelector('.library');
function createCard(item) {
    const cards = document.createElement('div'); // This is the div to append the items to.
    const details = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const image = document.createElement('div');
    const img = document.createElement('img');
    const inputLabel = document.createElement('p');
    const inputCont = document.createElement('label');
    const inputCheckBox = document.createElement('input');
    const box = document.createElement('span');
    const remove = document.createElement('button');
    

    cards.classList.add('card');
    cards.classList.add(`book-${myLibrary.indexOf(item)}`);
    details.classList.add('details');
    image.classList.add('image');
    inputLabel.classList.add('toggle-label');
    inputCont.classList.add('switch');
    inputCheckBox.setAttribute('type', 'checkbox');
    box.classList.add('slider');
    box.classList.add('round');
    remove.classList.add('remove');

    img.src = './placeholder_book_cover.jpg';
    title.textContent = item.bookTitle;
    author.textContent = item.bookAuthor;
    pages.textContent = item.bookPages;
    inputLabel.textContent = 'Mark as Read';
    remove.textContent = 'x';

    inputCont.appendChild(inputCheckBox);
    inputCont.appendChild(box);
    cards.appendChild(details)
    cards.appendChild(image);
    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(pages);
    image.appendChild(img);
    cards.appendChild(inputLabel);
    cards.appendChild(inputCont);
    cards.appendChild(remove);
    bookShelf.appendChild(cards);

    if (item.bookStat === true) {
        inputCheckBox.checked = true;
    }

    if (item === placeholder) {
        img.src = './book_cover_1.jpg';
    };

}

// Delete cards
// CardContainer is the library div
function deleteAllBooks() {
    while (bookShelf.firstChild) {
      bookShelf.lastChild = null;
      bookShelf.removeChild(bookShelf.lastChild);
    }
}

function deleteBook (clickEvent) {
    const parent = clickEvent.target.parentNode;
    const str = clickEvent.target.parentNode.className;
    const char = clickEvent.target.parentNode.className.indexOf('-');
    const index = str.slice(char+1);
    parent.remove();
    myLibrary.splice(index, 1); // Upon removing the array element, the array will be updated (meaning new indexes should be assigned to remaining book objects)
    deleteAllBooks(); // Updates the indices of the remaining books in the DOM
    myLibrary.forEach(createCard);
    bindListenClick();
}

// New card based on forms
const form = document.querySelector('.new-book');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const readStatus = document.querySelector('#readStatus').checked;
    const newBook = createBook(title, author, pages, readStatus);
    addToLibrary(newBook);
    createCard(newBook);
    bindListenClick();
    toggleForm();
})

function listenClick(target) {
    target.addEventListener('click',deleteBook);
}


function bindListenClick() {
    const btnDelete = document.querySelectorAll('.remove');
    btnDelete.forEach(listenClick);
}

const overlay = document.querySelector('.overlay');
function toggleForm () {
    const bookForm = document.querySelector('.form-hidden');
    bookForm.classList.toggle('active');
    overlay.classList.toggle('active');
    form.reset();
}

const addNewBook = document.querySelector('.add-book');
const formClose = document.querySelector('.form-close');

addNewBook.addEventListener('click', toggleForm);
formClose.addEventListener('click', toggleForm);

myLibrary.forEach(createCard);
bindListenClick();