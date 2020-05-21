import React from "react";
import { Route } from "react-router-dom";
import Search from "./Search";
import ListOfBooks from "./ListOfBooks";
import * as BookAPI from "./BookAPI";

class MyBookshelf {
    // prevents Search from showing up in ListOfBooks
    state = {
        books: [],
        searchedForBooks: [],
        filteredBooks: []
    };

    // for the current books in the bookshelf
    componentDidMount(){
        BookAPI.getEvery().then((books) => {
            this.setState({ books })
        });
    }

    // BookAPI needs book object and shelf string, so they must be passed to modifyShelf
    modifyShelf = (book, bookshelf) => {
        // check if search results already exist in list of books
        BookAPI.update(book, bookshelf).then(response => {
            book.bookshelf = bookshelf;
            this.setState((state) => ({
                books: this.state.books.filter((b) => b.id !== book.id).concat([book])
            }));
        });
    }

    submitTheQuery= (query, searchedForBooks) => {
        if (query !== ""){
            this.setState({ query: query});

            const { books } = this.state;

            // sets default search state to "none" through the find() function,
            // which catches any infrequent thumbnail in the search process
            BookAPI.search(query, 100).then(searchedForBooks => {
                // on an empty query or unsuccessful search, 
                // search result is empty
                if (searchedForBooks.error){
                    this.setState({ searchedForBooks: [] });
                }
                // on a successful search, the books on the shelf are mapped
                // to the search results
                else{
                    // eslint-disable-next-line array-callback-return
                    searchedForBooks.map((filteredBooks) => {
                        // check if the searched books match with
                        // any books on the list
                        let bookOnTheShelf = books.find((b) => b.id === filteredBooks.id);
                        // Is the book already on the shelf?
                        // If yes, then update the shelf of the corresponding book.
                        if (bookOnTheShelf === true){
                            filteredBooks.bookshelf = bookOnTheShelf.bookshelf;
                        }
                        // If no, set shelf to equal "none".
                        else{
                            filteredBooks.bookshelf = "none";
                        }
                    });
                    this.setState({ searchedForBooks: searchedForBooks });
                }
            }).catch(e => {this.setState({ searchedForBooks: [] })})
            
        }
    }

    render(){
        return (
            <div>
                <Route exact path="/my-bookshelf" render={({ history }) => (
                    <ListOfBooks books={this.state.books}
                        modifyShelf={this.modifyShelf} />
                    )} />
                />

                <Route exact path="/search" render={({ history }) => (
                    <Search searchedForBooks={this.state.searchedForBooks}
                        modifyShelf={this.modifyShelf}
                        submitTheQuery={this.submitTheQuery} />
                    )} />
                />
            </div>
        );
    }
};

export default MyBookshelf;