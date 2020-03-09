import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';

class App extends Component {
  state = {
    error: null,
    books: [],
  }

  handleSearchSubmit = (e) => {
    let query = e.target.search.value
    let booktype = e.target['book-type'].value
    let printtype = e.target['print-type'].value
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printtype}`

    if(booktype){
      url += `&filter=${booktype}`
    }

    fetch(`${url}`)
      .then(response =>{
        if(!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          books: data.items,
        })
      })
      .catch(error => {
        this.setState({
          error: error.message
        })
      })
  }



  render(){
    return (
      <div>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search handleSearchSubmit={this.handleSearchSubmit} />
        <Results books={this.state.books}/>
      </div>
    )
  }
}

export default App;
