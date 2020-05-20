const api = "https://reactnd-books-api.udacity.com";

// generates a unique token so your bookshelf data can be stored on the backend server
let token = localStorage.token;
if (!token){
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Accept': 'application/json',
    'Authorize': token
};

export const get = (bookID) => {
    fetch(`${api}/books/${bookID}`, { headers })
    .then(res => res.json())
    .then(data => data.book)
};

export const getEvery = () => {
    fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.book);
};

export const update = (book, bookshelf) => {
    fetch(`${api}/books/${book.id}`, {
        method: "PUT",
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookshelf })
    }).then(res => res.json())
};

export const search = (query, mostResults) => {
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, mostResults })
    }).then(res => res.json())
      .then(data => data.books)
};