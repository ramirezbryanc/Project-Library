const myLibrary = [];

function Books(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${readStatus}`;
    }
}


// Convert the above constructor function into a factory function
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

const witcher = new Books("The Witcher: The Last Wish", "Andrzej Sapkowski", "288", "Read");

const book2 = new Books("Book2", "bigbossbry", "0", "Not Read");

const book3 = new Books("Book3", "bigbossbry", "0", "Not Read");

addToLibrary(witcher);
addToLibrary(book2);
addToLibrary(book3);


const overlay = document.querySelector('.overlay');
// overlay.addEventListener('click', fnplaceholder)

// Looping function

const cardsContainer = document.querySelector('.library');

function createCard(item) {
    console.log (item); // Item here is the array index.
    const cards = document.createElement('div'); // This is the div to append the items to.
    cards.classList.add(`data-`);
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const markRead = document.createElement('p');
    markRead.classList.add('toggle-label');
    const label = document.createElement('label');
    label.classList.add('switch');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const box = document.createElement('span');
    box.classList.add('slider');
    box.classList.add('round');
    const remove = document.createElement('button');
    remove.classList.add('remove');
    title.textContent = item.title;
    author.textContent = item.author;
    pages.textContent = item.pages;
    markRead.textContent = 'Mark as Read';
    remove.textContent = 'x';
    label.appendChild(checkbox);
    label.appendChild(box);
    cards.appendChild(title);
    cards.appendChild(author);
    cards.appendChild(pages);
    cards.appendChild(markRead);
    cards.appendChild(label);
    cards.appendChild(remove);
    cards.classList.add('card');
    cardsContainer.appendChild(cards);
    if (item.readStatus === true) {
        checkbox.checked = true;
    }
}

// Delete cards
// CardContainer is the library div
function deleteCards() {
    while (cardsContainer.firstChild) {
      cardsContainer.lastChild = null;
      cardsContainer.removeChild(cardsContainer.lastChild);
    }
  }

  
// New card based on forms
const form = document.querySelector('.new-book');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const readStatus = document.querySelector('#readStatus').checked;
    const newBook = new Books(title, author, pages, readStatus);
    addToLibrary(newBook);
    deleteCards();
    myLibrary.forEach(createCard)
})

function deleteThisCard (clickEvent) {
    const parent = clickEvent.target.parentNode;
    parent.remove();
}

function listenClick(target) {
    target.addEventListener('click',deleteThisCard);
}

myLibrary.forEach(createCard)
const btnDelete = document.querySelectorAll('.remove');
btnDelete.forEach(listenClick);

const addNewBook = document.querySelector('.add-book');

function toggleForm () {
    const bookForm = document.querySelector('.form-hidden');
    bookForm.classList.toggle('active');
    overlay.classList.toggle('active');
}

const formClose = document.querySelector('.form-close');

addNewBook.addEventListener('click', toggleForm);
formClose.addEventListener('click', toggleForm);

// Need to add a function to remove an object from the library array.
