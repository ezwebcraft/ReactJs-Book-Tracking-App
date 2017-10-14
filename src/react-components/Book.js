import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const {book, updateShelf} = this.props
    var authors = (book.authors === undefined) ? [] : book.authors;
    const coverStyle = {
      width: 130,
      height: 200,
      backgroundImage: `url('${book.imageLinks.smallThumbnail ? book.imageLinks.thumbnail : ''}')`
    }
    return (
      <li key={book.id}>
        <div className='book'>
          <div className='book-top'>
            <a href={book.infoLink} target='_blank'><div className='book-cover' style={coverStyle}/></a>
            <Selector book={book} updateShelf={updateShelf}/>
          </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>{`by ${authors.join(', ')}`}</div>
        </div>
      </li>
    )
  }
}

export default Book;
