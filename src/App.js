import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';

class App extends Component {
  state = {
    searchTerm: '',
    error: null,
    title: '',
    books: '',
  }

  handleSearchSubmit = () => {
    console.log('clicked')
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`)
      .then(response =>{
        if(!response.ok) {
          throw new Error('Something went wrong')
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          books: data.items,
          title: data.items[0].volumeInfo.title
          //map over books to get the data we need
        })
        console.log('done')
      })
      .catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  searchInput = event => {
    this.setState({searchTerm: event.target.value})
    console.log(event.target.value)
  }

  render(){
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search handleSearchSubmit={this.handleSearchSubmit} handleChange={this.searchInput} />
        <Results />
        {this.state.title}
      </div>
    )
  }
}

export default App;
