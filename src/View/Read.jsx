import React from "react";
import "../App.css";
import Book from "../View/Book";

class Read {
    render(){
        // destructuring props here so this can be called without using "this.props"
        const { books, editShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* must bind editShelf function before it can be passed as a prop to Book.jsx */}
                        {books.filter(book => book.bookshelf === 'Read').map((book) => <Book key={book.id} book={book} editShelf={editShelf} />)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Read;