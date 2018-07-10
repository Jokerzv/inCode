import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allRedicers from './reducers';
import WebPage from './components/WebPage';

const store = createStore (allRedicers);

ReactDOM.render(
  <Provider store={store}>
  <WebPage />
  </Provider>,
  document.getElementById('fieldToShow')
);
