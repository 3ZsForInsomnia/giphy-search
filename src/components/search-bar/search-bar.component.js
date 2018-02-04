import React, { Component } from "react";
import Proptypes from "prop-types";
import "./search-bar.styles.css";
import SearchDropdown from "./../../containers/search-dropdown.container";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            filteredSearchTerms: [],
            offset: 0,
            isFocused: true, // we autofocus the input
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterPreviousSearches = this.filterPreviousSearches.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
    }

    handleSubmit(event) {
        // this.filterPreviousSearches(event);
        event.preventDefault();
        if (this.props.lastSearchedTerm !== this.state.searchTerm) {
            this.setState({
                ...this.state,
                offset: 0,
            });
        } else {
            this.setState({
                ...this.state,
                offset: this.state.offset + 1
            });
        }
        this.props.onSearch(this.state.searchTerm);
    }

    filterPreviousSearches(event) {
        const currentTerm = event.target.value.toLowerCase();
        const filteredSearchTerms = [].concat(
            this.props.previousSearchTerms.filter(previousSearchTerm => {
                return previousSearchTerm.indexOf(currentTerm) >= 0;
            })
        );
        this.setState({
            searchTerm: currentTerm,
            filteredSearchTerms
        })
    }

    componentDidUpdate(oldProps, oldState) {
        if (oldProps.lastSearchedTerm !== this.props.lastSearchedTerm) {
            this.setState({
                ...this.state,
                searchTerm: this.props.lastSearchedTerm
            });
        }
    }

    hideDropdown() {
        this.setState({
            ...this.state,
            isFocused: false,
        });
    }

    showDropdown() {
        this.setState({
            ...this.state,
            isFocused: true,
        });
    }

    render() {
        return <div className="search-bar">
            <a className="pronounciation"
                href="http://fizzystack.web.fc2.com/gif.html"
                target="_blank"
            >
                How to pronounce "gif"
            </a>
            <form onSubmit={this.handleSubmit}>
                <input autoFocus
                    onBlur={this.hideDropdown}
                    onFocus={this.showDropdown}
                    className="search-bar__input"
                    placeholder="Search Giphy!"
                    onChange={this.filterPreviousSearches}
                    type="text"
                    value={this.state.searchTerm}
                />
            </form>
            <div id="dropdown-attach">
                {
                    (this.props.previousSearchTerms.length > 0 && this.state.isFocused)
                    ? <div className="dropdown-container">
                        <SearchDropdown />
                    </div>
                    : ""
                }
            </div>
        </div>
    }
}

SearchBar.proptypes = {
    onSearch: Proptypes.func,
    lastSearchedTerm: Proptypes.string,
    previousSearchTerms: Proptypes.array,
}

export default SearchBar;
