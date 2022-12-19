import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Redux</h1>
        <SearchBar/>
      </header>
    </div>
  );
}

export default App;
