import React from 'react';
import Filter from './Filter';

class Search extends React.Component {
  render(){
    return(
      <form id="search-form">
        <label htmlFor="search">Search:</label>
        <input type="text" name="search" id="search" placeholder="book title" required
        onChange={this.props.handleChange}>
        </input>
        <button type="submit" 
          onClick={(event) => {
            event.preventDefault();
            this.props.handleSearchSubmit()
          }}>
            Search</button>
        <Filter />
      </form>
    )
  }
}

export default Search;