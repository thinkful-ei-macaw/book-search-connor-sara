import React from 'react';
import './App.css';
import Search from './Search';
import Results from './Results';

function App() {

  

  return (
    <div>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Search />
      <Results />
    </div>
  )
}

export default App;
