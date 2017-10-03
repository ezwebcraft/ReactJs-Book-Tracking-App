import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelectBooks extends Component {
 static propTypes = {

  }


//note on adding handlers

 render() {
 	return (
	      <div className="book-shelf-changer">
	        <select>
	          <option value="none" disabled>Move to...</option>
	          <option value="currentlyReading">Currently Reading</option>
	          <option value="wantToRead">Want to Read</option>
	          <option value="read">Read</option>
	          <option value="none">None</option>
	        </select>
	      </div>
    );

  }
}

export default SelectBooks;