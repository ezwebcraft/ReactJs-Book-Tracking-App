import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelectBooks extends Component {
 static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  changeShelf = (event) => {
    event.preventDefault();
    this.props.updateShelf(this.props.book, event.target.value);
  }

  render() {
    const {book} = this.props
    return (
      <div className='book-shelf-changer'>
        <select value={book.shelf} onChange={(e) => this.changeShelf(e)}>
          <option value='none' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }

}

export default SelectBooks;