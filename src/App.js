import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'

//Components
import showBooks from './react-components/showBooks.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

getBooks = () => {
 // get the state in the API
 BooksAPI.getAll().then(books => {
      this.setState({books});
    })
}

placeBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      this.setState(status => ({
        books: status.books.map(b => {
          if (book.id === b.id) {
            b.shelf = shelf;
          }
          return b;
        })
      }));
    });
  }
  render() {
    const {books} = this.state;
    return (
      <div className="app">

        <Route exact path='/' render={() => (<showBooks books={books} placeBookToShelf={this.placeBookToShelf} getBooks={this.getBooks} /> )} />
      </div>

    )
  }
}

export default BooksApp
