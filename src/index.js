import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './assets/normalize.css';
import './assets/style.css';
import mainReducer from './reducers';
import App from './components/app';
import { generateId } from './assets/utils';

const INITIAL_STATE = {
  books: [
    { bookId: generateId(), title: 'Presidents of War', category: 'biography' },
    { bookId: generateId(), title: 'Zodiac Academy', category: 'kids' },
    {
      bookId: generateId(),
      title: 'The Code in react',
      category: 'learning',
    },
  ],
};

const store = createStore(mainReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
