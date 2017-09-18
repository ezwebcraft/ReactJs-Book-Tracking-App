import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import bookShelf from './bookShelf';

class showBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookToShelf: PropTypes.func.isRequired,
    showBooks: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.showBooks();
  }

  render() {
    const {books, bookToShelf} = this.props;
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <bookShelf books={currentlyReading} bookToShelf={bookToShelf} title='Currently Reading'/>
          <bookShelf books={wantToRead} bookToShelf={bookToShelf} title='Want To Read'/>
          <bookShelf books={read} bookToShelf={bookToShelf} title='Read'/>
        </div>
        <div className='open-search'>
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default showBooks