import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TrendingGifs from "./containers/trending-gifs.container";
import SearchBar from "./containers/search-bar.container";
import SearchResults from "./containers/search-results.container";
import SpecificGif from "./containers/specific-gif.container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrendingGifs />
        <SearchBar />
        {/* <SearchResults /> */}
        <SpecificGif />
      </div>
    );
  }
}

export default App;
