import React from 'react'
import Book from './Book'
const BookShelf = ({heading,books,changeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{heading}</h2>
            <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => <Book key={book.id} book={book} changeShelf={changeShelf} /> )}
          </ol>
        </div>
        </div>
    )
        
    
}

export default BookShelf