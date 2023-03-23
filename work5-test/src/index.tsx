import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";


const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
))
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

