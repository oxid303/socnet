import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import News from './components/News/news.js';
import Music from './components/Music/music.js';
import Settings from './components/Settings/settings.js';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/" render={() => <Profile state={props.state.profile} dispatch={props.dispatch} />} />
        <Route path="/profile" render={() => <Profile state={props.state.profile} dispatch={props.dispatch} />} />
        <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogs} dispatch={props.dispatch} />} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/settings" render={Settings} />
      </div>
    </div>
  );
};

export default App;
