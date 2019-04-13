import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// BrowserRouter, Router, Route, Link, NavLink
import { BrowserRouter } from 'react-router-dom';

export let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>, document.getElementById('root'));
}
