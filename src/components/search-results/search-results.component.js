import React, { Component } from "react";
import Proptypes from "prop-types";
import "./search-results.styles.css";
import GifDisplay from "./../gif-display/gif-display.component";
import { hasUserScrolledToBottom } from "./../../services/scroll-utilities.service";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        if (hasUserScrolledToBottom) {
            this.props.loadMoreGifs();
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    render() {
        return <div className="search-results">
            { (this.props.searchResults.length > 0)
                ? this.props.searchResults.map((result, index) => {
                    return <div
                        className="search-results__item"
                        key={index}
                        onClick={() => this.props.onGifSelect(result)}
                    >
                        <GifDisplay gif={result} />
                    </div>
                })
                : "" }
        </div>
    }
}

SearchResults.proptypes = {
    searchResults: Proptypes.array,
    haveThereBeenPreviousSearches: Proptypes.bool,
    loadMoreGifs: Proptypes.func,
    onGifSelect: Proptypes.func
}

export default SearchResults;
