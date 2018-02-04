import { connect} from 'react-redux';
import { StartANewSearchAction } from './../store/giphy/giphy-combined.actions';
import SearchDropdown from './../components/search-dropdown/search-dropdown.component';

const mapStateToProps = state => {
    return {
        previousSearchTerms: state.giphySearch.previousSearchTerms,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchAgain: searchTerm => {
            dispatch(StartANewSearchAction(searchTerm));
        }
    }
}

const SearchDropdownContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchDropdown);

export default SearchDropdownContainer;
