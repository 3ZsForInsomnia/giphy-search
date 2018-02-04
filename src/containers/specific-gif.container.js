import { connect} from "react-redux";
import { UnsetSelectedGifAction, UnsetSearchResultsAction } from "./../store/giphy/giphy-content/giphy-content.actions";
import SpecificGif from "./../components/specific-gif/specific-gif.component";

const mapStateToProps = state => {
    return {
        selectedGif: state.giphyContent.trendingGifs[0],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        returnToSearch: () => {
            dispatch(UnsetSelectedGifAction());
        }
    }
}

const SpecificGifContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpecificGif);

export default SpecificGifContainer;
