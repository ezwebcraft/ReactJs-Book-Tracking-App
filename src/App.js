import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import FindBooks from './react-components/FindBooks'
import ListBooks from './react-components/ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  listBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    })
  }

  updateShelf = (book, shelf) => {
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
      <div className='app'>
        <Route exact path='/search' render={() => (<FindBooks updateShelf={this.updateShelf} books={books}/>)}/>
        <Route exact path='/' render={() => (<ListBooks books={books} updateShelf={this.updateShelf} listBooks={this.listBooks}/>)}/>
      </div>
    )
  }
}

export default BooksApp;
