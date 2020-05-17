import React from "react";
import "./src/App.css";
import { Link } from "react-router-dom";
import Book from "../View/Book";
import { DebounceInput } from "react-debounce-input";

class Search {
    state = {
        query: ""
    };

    updateTheQuery = query => {
        this.setState({query: query.trim()})
    };

    render(){
        // destructuring props here so this can be called without using "this.props"
        const { searchedBooks, submitTheQuery, editShelf} = this.props;
        const { query } = this.state;

        return (
            // search bar
            <div>
                <div className="book-search">
                    <div className="book-search-bar">
                        <Link to="/" className="close-search"></Link>
                        <form className="book-search-input-wrapper" onChange={(event) => submitTheQuery(event.target.value)}>
                            <DebounceInput
                                debounceTimeout={100}
                                type="text"
                                placeholder="Search by title"
                                value={query}
                                onChange={(event) => this.updateTheQuery(event.target.value)}
                            />
                        </form>
                    </div>
                    <div className="book-search-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                {/* bookshelves */}
                <div className="bookshelf">
                    <div className="bookshelf-of-books">
                        <ol className="books-grid">
                            {searchedBooks.map((book) =>
                                <Book key={book.id} book={book} editShelf={editShelf}/>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;