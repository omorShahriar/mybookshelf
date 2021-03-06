import React from "react";
import { Link } from "@reach/router";
import Book from "./Book";
import { search } from "../BooksAPI";

class SearchBooks extends React.Component {
  state = {
    query: "",
    searchedBooks: []
  };

  handleSearch = e => {
    this.setState({ query: e.target.value }, () => {
      search(this.state.query)
        .then(res =>
          Array.isArray(res)
            ? this.setState({ searchedBooks: res })
            : this.setState({ searchedBooks: [] })
        )
        .catch(err => console.log(err));
    });
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={process.env.PUBLIC_URL}>
            <button className="close-search">Close</button>
          </Link>

          <div className="search-books-input-wrapper">
            {/* NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms. */}

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
