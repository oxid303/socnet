import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// BrowserRouter, Router, Route, Link, NavLink
import { BrowserRouter } from 'react-router-dom';
import { funcs } from './components/Redux/state';

let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} funcs={funcs} />
    </BrowserRouter>, document.getElementById('root'));
}

export default rerender;
