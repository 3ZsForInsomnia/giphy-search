import { connect} from "react-redux";
import * as actions from "./../store/giphy/giphy-content/giphy-content.actions";
import TrendingGifs from "./../components/trending-gifs/trending-gifs.component";

const mapStateToProps = state => {
    return {
        trendingGifs: state.giphyContent.trendingGifs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGifSelect: gif => {
            dispatch(actions.SetSelectedGifAction(gif));
        }
    }
}

const TrendingGifsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TrendingGifs);

export default TrendingGifsContainer;
