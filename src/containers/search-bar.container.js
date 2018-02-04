import { connect} from "react-redux";
import { StartANewSearchAction } from "./../store/giphy/giphy-combined.actions";
import SearchBar from "./../components/search-bar/search-bar.component";

const mapStateToProps = state => {
    return {
        previousSearchTerms: state.giphySearch.previousSearchTerms,
        // "lastSearchedTerm is named differently than normal  to emphasize
        // difference between the component's current search text
        // and last search request made
        lastSearchedTerm: state.giphySearch.searchTerm,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (searchTerm) => {
            dispatch(StartANewSearchAction(searchTerm));
        }
    }
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
