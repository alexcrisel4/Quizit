import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { signup } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup
});
