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

addToLibrary(witcher);