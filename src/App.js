import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Search_Books from './components/Search_Books'
import List_Books from './react-components/List_Books'

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
        <Route exact path='/search' render={() => (<Search_Books updateShelf={this.updateShelf} books={books}/>)}/>
        <Route exact path='/' render={() => (<List_Books books={books} updateShelf={this.updateShelf} listBooks={this.listBooks}/>)}/>
      </div>
    )
  }

}

export default BooksApp