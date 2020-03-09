import React from 'react';
import Filter from './Filter';

class Search extends React.Component {
  render(){
    return(
      <form id="search-form">
        <label for="search">Search:</label>
        <input type="text" name="search" id="search" placeholder="book title" required>
        </input>
        <button type="submit">Search</button>
        <Filter />
      </form>
    )
  }
}

export default Search;