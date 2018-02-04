import * as actions from "./giphy-search.actions";

const initialState = {
    searchTerm: "",
    previousSearchTerms: [],
    offset: 0,
}

export const giphySearch = (state = initialState, action) => {
    switch (action.type) {
        case actions.setSearchTerm:
            return {
                ...state,
                searchTerm: action.payload.searchTerm
            };
        case actions.setSearchOffset:
            return {
                ...state,
                offset: action.payload.offset
            }
        case actions.updatePreviousSearches:
            return {
                ...state,
                previousSearchTerms: action.payload.previousSearchTerms
            }
        default:
            return state
    }
}
