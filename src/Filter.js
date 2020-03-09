import React, { Component } from 'react';

class Filter extends Component {
  render(){
    return(
        <div>
        <label htmlFor="print-type">
          Print Type: 
        </label>
        <select name="print-type" id="print-type">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type">
          Book Type: 
        </label>
        <select name="book-type" id="book-type">
          <option value="full">All</option>
          <option value="ebooks">All e-books</option>
          <option value="paid-ebooks">Paid e-books</option>
          <option value="free-ebooks">Free e-books</option>
          <option value="partial">Partial</option>
        </select>
      </div>
    )
  }
}

export default Filter;