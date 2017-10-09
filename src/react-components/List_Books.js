import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Book_Shelf from './Book_Shelf';

class List_Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    listBooks: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.listBooks();
  }

  render() {
    const {books, updateBooks} = this.props;
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <Book_Shelf books={currentlyReading} updateBooks={updateBooks} title='Currently Reading'/>
          <Book_Shelf books={wantToRead} updateBooks={updateBooks} title='Want To Read'/>
          <Book_Shelf books={read} updateBooks={updateBooks} title='Read'/>
        </div>
        <div className='open-search'>
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default List_Books
