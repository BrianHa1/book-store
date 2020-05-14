import React from "react";
import "../App.css";
import Book from "../View/Book";

class WantToRead {
    render(){
        // destructuring props here so this can be called without using "this.props"
        const { books, editShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* must bind editShelf function before it can be passed as a prop to Book.jsx */}
                        {books.filter(book => book.bookshelf === 'wantToRead').map((book) => <Book key={book.id} book={book} editShelf={editShelf} />)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default WantToRead;