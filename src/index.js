import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//Redux:
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";
import { fetchGithubData, fetchFoodData } from "./store/actions/index";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchGithubData());
store.dispatch(fetchFoodData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
