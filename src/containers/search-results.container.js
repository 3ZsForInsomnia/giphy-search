import { connect} from "react-redux";
import * as effects from "./../store/giphy/giphy.effects";
import * as searchActions from "./../store/giphy/giphy-search/giphy-search.actions";
import * as contentActions from "./../store/giphy/giphy-content/giphy-content.actions";
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
            dispatch(searchActions.IncrementSearchOffsetAction());
            dispatch(effects.getSearchResultsEffect());
        },
        onGifSelect: gif => {
            dispatch(contentActions.SetSelectedGifAction(gif));
        }
    };
}

const TrendingGifsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchResults);

export default TrendingGifsContainer;
