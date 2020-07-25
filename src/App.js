import React from "react";
import * as BooksAPI from "./BooksAPI";
import BooksApp from "./components/BooksApp";
import "./App.css";
import { Router } from "@reach/router";
import SearchBooks from "./components/SearchBooks";
console.log(process.env.PUBLIC_URL);
class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    loading: true
  };
  componentDidMount() {
    BooksAPI.getAll().then(res =>
      this.setState({ books: res, loading: false })
    );
  }

  changeShelf = info => {
    const { shelf, book } = info;
    if (this.state.books.some(b => b.id === book.id)) {
      this.setState(
        state => ({
          books: state.books.map(b => (b.id === book.id ? { ...b, shelf } : b))
        }),
        () => BooksAPI.update(book, shelf)
      );
    } else {
      const newBook = { ...book, shelf };
      this.setState(
        state => ({
          books: state.books.concat(newBook)
        }),
        () => BooksAPI.update(book, shelf)
      );
    }
  };
  render() {
    return (
      <div className="app">
        {this.state.loading ? (
          <h1>Loading</h1>
        ) : (
          <Router>
            <BooksApp
              path={process.env.PUBLIC_URL + "/"}
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
            <SearchBooks
              path={process.env.PUBLIC_URL + "search-book"}
              changeShelf={this.changeShelf}
            />
          </Router>
        )}
      </div>
    );
  }
}

export default App;
