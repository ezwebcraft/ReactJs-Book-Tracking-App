import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Books';

class bookShelf extends Component {

static propTypes = {

	title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    bookToShelf: PropTypes.func.isRequired
}

 render() {

 	const {books, title, bookToShelf} = this.props;

 		return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	 {books.map((book) => (<Book key={book.id} book={book} bookToShelf={bookToShelf}/>))}
         			</ol>
        		  </div>
      			</div>
      	)

	}

}