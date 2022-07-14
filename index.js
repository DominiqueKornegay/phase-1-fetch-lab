function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch ("https://anapioficeandfire.com/api/books")
  .then (function response (res) {
    return res.json()
  }) 
  .then(function manipulation (JSON) {
    renderBooks(JSON)
  });
  
}

function renderBooks(books) {
  let main = document.querySelector('main');
  books.forEach(book => {
    let h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
