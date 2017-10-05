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


}

export default searchForBooks
