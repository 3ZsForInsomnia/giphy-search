import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './search-bar.styles.css';
import SearchDropdown from './../../containers/search-dropdown.container';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            offset: 0,
            isFocused: true, // we autofocus the input
        }
        this.setCurrentSearchTerm = this.setCurrentSearchTerm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    handleSubmit(event) {
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
        this.hideDropdown();
    }

    setCurrentSearchTerm(event) {
        this.setState({
            ...this.state,
            isFocused: true,
            searchTerm: event.target.value.toLowerCase(),
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

    render() {
        return <div className="search-bar">
            <a className="pronounciation"
                href="http://fizzystack.web.fc2.com/gif.html"
                target="_blank" rel="noopener noreferrer"
            >
                How to pronounce "gif"
            </a>
            <form onSubmit={this.handleSubmit}>
                <input autoFocus
                    className="search-bar__input"
                    placeholder="Search Giphy!"
                    onChange={this.setCurrentSearchTerm}
                    type="text"
                    value={this.state.searchTerm}
                />
            </form>
            <div id="dropdown-attach">
                { (this.props.previousSearchTerms.length > 0 && this.state.isFocused)
                    ? <div className="dropdown-container">
                        <SearchDropdown />
                    </div>
                    : "" }
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
