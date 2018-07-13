import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allRedicers from "./js/reducers";
import WebPage from "./js/components/WebPage";

const store = createStore(allRedicers);

const Hello = () => (
  <Provider store={store}>
    <WebPage />
  </Provider>
);

export default Hello;
