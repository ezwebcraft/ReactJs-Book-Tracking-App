import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class searchForBooks extends Component {

  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }

  state = {
    query: '',
    books: [],
  }

    searchForBooks = (query) => {
    if (query) {
      BooksAPI.search(query.trim()).then(response => {
        let books = [];
        if (Array.isArray(response)) {
          books = response;
        }
        if (Array.isArray(response.books)) {
          books = response.books;
        }
        books.map((book) => {this.updateBookShelfFromLibraryBook(book);})
        this.setState({books});
      });
    } else {
      this.setState({books: []});
    }
  }


}

export default searchForBooks
