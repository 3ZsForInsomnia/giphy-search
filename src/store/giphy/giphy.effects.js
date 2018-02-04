import * as actions from './giphy-content/giphy-content.actions';

// Constants for setting number of items to retrieve per endpoint
const numberOfTrendingItemsToRetrieve = 18;
const numberOfSearchResultsToRetrieve = 40;

// Constants for creating request strings
const giphyApiUrl = 'http://api.giphy.com/v1/gifs/';
const apiKey = 'dc6zaTOxFJmzC';
const apiKeyString = '&api_key=' + apiKey;
// Trending request never changes, and so can be declared as const
const trendingRequestString = giphyApiUrl + 'trending?' + apiKeyString +
    '&limit=' + numberOfTrendingItemsToRetrieve;
// Search request changes for each request, so must be 'let'
let searchRequestString = giphyApiUrl + 'search?' + apiKeyString;

/*
 * This file contains API methods, written in the style of redux actions
 * Separating them out from the other "actions"
 * keeps files of simple/non-async actions cleaner
 * I find this especially useful as async/API focused actions fulfill a distinct purpose
 */

export const getTrendingGifsEffect = () => (dispatch) => {
    fetch(trendingRequestString).then(response => {
        return response.json();
    })
    .then(data => {
        dispatch(actions.SetTrendingGifsAction(data.data));
    })
    .catch(error => {
        console.log('error: ', error);
    });
}

export const getSearchResultsEffect = () => (dispatch, getState) => {
    const offset = getState().giphySearch.offset;
    const searchTerm = getState().giphySearch.searchTerm;
    const urlForCurrentSearchRequest = searchRequestString
        + '&q=' + searchTerm + '&offset=' + offset
        + '&limit=' + numberOfSearchResultsToRetrieve;
    fetch(urlForCurrentSearchRequest).then(response => {
        return response.json();
    }).then(data => {
        dispatch(actions.SetSearchResultsAction(data.data));
    });
}
