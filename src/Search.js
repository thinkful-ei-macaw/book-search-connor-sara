import React, { Component } from 'react';
import Filter from './Filter';

class Search extends Component {
  render(){
    return(
      <form id="search-form" 
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSearchSubmit(e)
      }}>
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" id="search" placeholder="book title" required>
        </input>
        <button type="submit">Search</button>
        <Filter />
      </form>
    )
  }
}

export default Search;