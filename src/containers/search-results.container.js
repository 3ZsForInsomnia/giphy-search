import { connect} from "react-redux";
import * as effects from "./../store/giphy/giphy.effects";
import * as actions from "./../store/giphy/giphy-search/giphy-search.actions";
import SearchResults from "./../components/search-results/search-results.component";

const mapStateToProps = state => {
    return {
        searchResults: state.giphyContent.searchResults,
        searchTerm: state.giphySearch.searchTerm,
        offset: state.giphySearch.offset,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadMoreGifs: () => {
            dispatch(actions.IncrementSearchOffsetAction());
            dispatch(effects.getSearchResultsEffect());
        }
    };
}

const TrendingGifsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchResults);

export default TrendingGifsContainer;
