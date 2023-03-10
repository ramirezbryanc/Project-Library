const myLibrary = [];

function Books(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
        return `${title  } by ${  author  }, ${  pages  }pages, ${  readStatus}`;
    }
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

// Looping function

const cardContainer = document.querySelector('.library');

function createCard(item) {
    console.log (item); // Item here is the array index.
    const cards = document.createElement('div'); // This is the div to append the items to.
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readStatus = document.createElement('p');
    readStatus.classList.add('toggle-label');
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
    readStatus.textContent = 'Mark as Read';
    remove.textContent = 'x';
    label.appendChild(checkbox);
    label.appendChild(box);
    cards.appendChild(title);
    cards.appendChild(author);
    cards.appendChild(pages);
    cards.appendChild(readStatus);
    cards.appendChild(label);
    cards.appendChild(remove);
    cards.classList.add('card');
    cardContainer.appendChild(cards);
}

myLibrary.forEach(createCard)


