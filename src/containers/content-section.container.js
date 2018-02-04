import { connect} from "react-redux";
import ContentSection from "./../components/content-section/content-section.component";

const mapStateToProps = state => {
    return {
        selectedGif: state.giphyContent.selectedGif
    }
}

const ContentSectionContainer = connect(
    mapStateToProps
)(ContentSection);

export default ContentSectionContainer;
