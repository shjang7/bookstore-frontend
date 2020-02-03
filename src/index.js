import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './assets/normalize.css';
import './assets/style.css';
import reducers from './reducers';
import App from './components/app';

const initialState = {
  books: [],
  filter: 'all',
  errors: ''
};

const store = createStore(reducers, initialState, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
