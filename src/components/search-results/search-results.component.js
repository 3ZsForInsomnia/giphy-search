import React, { Component } from "react";
import Proptypes from "prop-types";
import "./search-results.styles.css";
import GifDisplay from "./../gif-display/gif-display.component";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.props.loadMoreGifs();
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return <div className="search-results">
            { (this.props.searchResults.length > 0)
                ? this.props.searchResults.map((result, index) => {
                    return <div className="search-results__item" key={index}>
                        <GifDisplay gif={result} />
                    </div>
                })
                : ""
            }
        </div>
    }
}

SearchResults.proptypes = {
    searchResults: Proptypes.array,
    haveThereBeenPreviousSearches: Proptypes.bool,
    loadMoreGifs: Proptypes.func,
}

export default SearchResults;
