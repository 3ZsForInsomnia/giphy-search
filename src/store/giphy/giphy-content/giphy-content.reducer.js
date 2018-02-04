import * as actions from './giphy-content.actions';

const initialState = {
    searchResults: [],
    selectedGif: {},
    trendingGifs: [],
}

export const giphyContent = (state = initialState, action) => {
    switch (action.type) {
        case actions.setSearchResults:
            return {
                ...state,
                searchResults: state.searchResults.concat(action.payload.searchResults),
            }
        case actions.unsetSearchResults:
            return {
                ...state,
                searchResults: [],
            }
        case actions.setSelectedGif:
            return {
                ...state,
                selectedGif: action.payload.selectedGif,
            }
        case actions.unsetSelectedGif:
            return {
                ...state,
                selectedGif: {},
            }
        case actions.setTrendingGifs:
            return {
                ...state,
                trendingGifs: action.payload.trendingGifs
            }
        default:
            return state
    }
}
