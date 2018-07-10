import React from 'react';
import ReactDOM from "react-dom";
import {createStrore} from 'redux';
import allRedicers from './reducers';

const store = createStrore (allRedicers);

ReactDOM.render(
  <h2>Здесь может быть любой текст 2</h2>,
  document.getElementById('fieldToShow')
);
