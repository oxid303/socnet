import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
// BrowserRouter, Router, Route, Link, NavLink
import { BrowserRouter } from 'react-router-dom';
import store from './components/Redux/redux-store';

export let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>, document.getElementById('root'));
};

rerender(store.getState());

store.subscribe(() => {
  rerender(store.getState());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
