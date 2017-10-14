import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class ShowBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    listBooks: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.listBooks();
  }

  render() {
    const {books, updateShelf} = this.props;
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>My Reading Journey</h1>
        </div>
        <div className='list-books-content'>
          <BookShelf books={currentlyReading} updateShelf={updateShelf} title='Currently Reading'/>
          <BookShelf books={wantToRead} updateShelf={updateShelf} title='Want To Read'/>
          <BookShelf books={read} updateShelf={updateShelf} title='Read'/>
        </div>
        <div className='open-search'>
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ShowBooks
