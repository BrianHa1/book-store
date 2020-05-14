import React from "react";
import "./src/App.css";

class Book {
    // check if thumbnail exists before using it
    checkIfThumbnailExists(book){
        if (book.imgLinks.thumbnail){
            return (
                <div className="book-cover" key={book.imgLinks.thumbnail} style={{backgroundImg:`url(${book.imgLinks.thumbnail})`}} alt="book-cover"></div>
            );
        }
    }

    render(){
        // destructuring props here so this can be called without using "this.props"
        const { book, editShelf } = this.props;

        return (
            // "this.props" is used when obtaining props from the parent
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        {this.checkIfThumbnailExists(book)}
                        <div className="book-shelf-modifier">
                            <select onChange={(event) => editShelf(book, event.target.value)} defaultValue={book.bookshelf}>
                                <option value="want-to-read">Want To Read</option>
                                <option value="currently-reading">Currently Reading</option>
                                <option value="read">Read</option>
                            </select>
                        </div>
                    </div>
                    <div className="title" key={book.title}>{book.title}</div>
                    <div className="authors" key={book.authors}>{book.authors && book.authors.join(', ')}</div>
                </div>
            </li>
        );
    }
}

export default Book;