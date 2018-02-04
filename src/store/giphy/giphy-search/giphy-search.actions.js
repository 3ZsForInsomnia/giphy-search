export const setSearchTerm = "[Giphy Search] Set Search Term";
export const setSearchOffset = "[Giphy Search] Set Search Offset";
export const updatePreviousSearches = "[Giphy Search] Update Previous Searches";

export const SetSearchTermAction = (searchTerm) => {
    return {
        type: setSearchTerm,
        payload: {
            searchTerm
        }
    }
}

export const SetSearchOffsetAction = (offset) => {
    return {
        type: setSearchOffset,
        payload: {
            offset
        }
    }
}

export const IncrementSearchOffsetAction  = () => (dispatch, getState) => {
    dispatch(SetSearchOffsetAction(getState().giphySearch.offset + 30));
}

export const UpdatePreviousSearchesAction = (previousSearchTerms) => {
    return {
        type: updatePreviousSearches,
        payload: {
            previousSearchTerms
        }
    }
}

export const CreateNewSearchTermAction = () => (dispatch, getState) => {
    const searchTerm = getState().giphySearch.searchTerm;
    // Remove all instances of the term currently being searched from the list of previous searches
    const filteredSearchTerms = getState().giphySearch.previousSearchTerms
    .filter(previousTerm => {
        return previousTerm !== searchTerm;
    });
    const newListOfPreviousSearchTerms = [].concat(
        getState().giphySearch.searchTerm,
        filteredSearchTerms
    );
    dispatch(SetSearchTermAction(searchTerm));
    dispatch(UpdatePreviousSearchesAction(newListOfPreviousSearchTerms));
}
