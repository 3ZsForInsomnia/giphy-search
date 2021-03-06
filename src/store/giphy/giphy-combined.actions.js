import { UnsetSearchResultsAction, UnsetSelectedGifAction } from './giphy-content/giphy-content.actions';
import { SetSearchTermAction, CreateNewSearchTermAction } from './giphy-search/giphy-search.actions';
import { getSearchResultsEffect } from './giphy.effects';

export const StartANewSearchAction = (searchTerm) => (dispatch) => {
    dispatch(UnsetSelectedGifAction());
    dispatch(UnsetSearchResultsAction());
    dispatch(SetSearchTermAction(searchTerm));
    dispatch(CreateNewSearchTermAction());
    dispatch(getSearchResultsEffect());
}
