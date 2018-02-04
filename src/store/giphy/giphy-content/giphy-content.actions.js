export const setSearchResults = "[Giphy Content] Set Search Results";
export const unsetSearchResults = "[Giphy Content] Unset Search Results";
export const setSelectedGif = "[Giphy Content] Set Selected Gif";
export const unsetSelectedGif = "[Giphy Content] Unset Selected Gif";
export const setTrendingGifs = "[Giphy Content] Set Trending Gifs";

export const SetSearchResultsAction = (searchResults) => {
    return {
        type: setSearchResults,
        payload: {
            searchResults
        }
    }
}

export const UnsetSearchResultsAction = () => {
    return {
        type: unsetSearchResults
    }
}

export const SetSelectedGifAction = (selectedGif) => {
    return {
        type: setSelectedGif,
        payload: {
            selectedGif
        }
    }
}

export const UnsetSelectedGifAction = () => {
    return {
        type: unsetSelectedGif
    }
}

export const SetTrendingGifsAction =  (trendingGifs) => {
    return {
        type: setTrendingGifs,
        payload: {
            trendingGifs
        }
    }
}
