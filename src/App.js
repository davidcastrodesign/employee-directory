import React from 'react';
import './App.css';
import Header from './components/Header';
import Searchbox from './components/SearchBox';
import ListingContainer from './components/ListingContainer';

function App() {
  return (
    <div className="App">
    <Header />
    <Searchbox />
    <ListingContainer />
    </div>
  );
}

export default App;
