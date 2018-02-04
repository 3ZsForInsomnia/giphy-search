import React, { Component } from 'react';
import './App.css';
import TrendingGifs from './containers/trending-gifs.container';
import SearchBar from './containers/search-bar.container';
import ContentSection from './containers/content-section.container';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TrendingGifs />
        <SearchBar />
        <ContentSection />
      </div>
    );
  }
}

export default App;
