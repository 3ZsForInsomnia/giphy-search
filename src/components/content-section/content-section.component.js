import React from 'react';
import SearchResults from './../../containers/search-results.container';
import SpecificGif from './../../containers/specific-gif.container';

const ContentSection = ({selectedGif}) => {
    return <div>
        { (selectedGif && selectedGif.images)
            ? <SpecificGif />
            : <SearchResults /> }
    </div>
}

export default ContentSection;
