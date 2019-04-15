import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
// BrowserRouter, Router, Route, Link, NavLink
import { BrowserRouter } from 'react-router-dom';
import state from './components/Redux/state';

export let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>, document.getElementById('root'));
};

rerender();

state.subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
