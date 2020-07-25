import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false,
    loading:true
  }
  componentDidMount() {
    BooksAPI.getAll().then((res) => this.setState({books: res,loading:false}) )
  }

  filterBook = (shelf) => {
    if(this.state.books.length) {
      return this.state.books.filter((book) => book.shelf === shelf )
    }
  }
  changeShelf = (info) => {
    const {shelf,book} = info
    this.setState(state => {
      return {
        ...state,
        books: state.books.map(b => b.id === book.id ? ({...b,shelf}) : (b)  )
      }
    },() =>  BooksAPI.update(book,shelf)) 

  }
  render() {
    return (
      <div className="app">
        {this.state.loading ? (
          <h1>Loading</h1>
        ) : (
          
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf heading="Currently Reading" books={this.filterBook('currentlyReading')} changeShelf={this.changeShelf}/> 
                <BookShelf heading="Want To Read" books={this.filterBook('wantToRead')} changeShelf={this.changeShelf}/>  
                <BookShelf heading="Read" books={this.filterBook('read')} changeShelf={this.changeShelf}/>   
              
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp



