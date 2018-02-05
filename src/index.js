import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import * as effects from './store/giphy/giphy.effects';
import { giphySearch } from './store/giphy/giphy-search/giphy-search.reducer';
import { giphyContent } from './store/giphy/giphy-content/giphy-content.reducer';

export const store = createStore(
    combineReducers({giphySearch, giphyContent}),
    applyMiddleware(thunk)
);

store.dispatch(effects.getTrendingGifsEffect());

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
