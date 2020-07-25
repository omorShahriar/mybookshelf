import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "@reach/router";
const BooksApp = ({ books, changeShelf }) => {
  const filterBook = shelf => {
    if (books.length) {
      return books.filter(book => book.shelf === shelf);
    }
  };
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            heading="Currently Reading"
            books={filterBook("currentlyReading")}
            changeShelf={changeShelf}
          />
          <BookShelf
            heading="Want To Read"
            books={filterBook("wantToRead")}
            changeShelf={changeShelf}
          />
          <BookShelf
            heading="Read"
            books={filterBook("read")}
            changeShelf={changeShelf}
          />
        </div>
      </div>
      <Link to="search-book">
        <div className="open-search">
          <button>Add a book</button>
        </div>
      </Link>
    </>
  );
};

export default BooksApp;
