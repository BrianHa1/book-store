import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

class ListOfBooks {
    render(){
        // destructuring props here so this can be called without using "this.props"
        const { books, editShelf } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Bookshelf</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading editShelf={editShelf} books={books} />
                    </div>
                    <div>
                        <WantToRead editShelf={editShelf} books={books} />
                    </div>
                    <div>
                        <Read editShelf={editShelf} books={books} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Search for book</Link>
                </div>
            </div>
        );
    }
}

export default ListOfBooks;