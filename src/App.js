import React from 'react';
import './App.css';
// import { BrowserRouter, Router, Route, Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import News from './components/News/news.js';
import Music from './components/Music/music.js';
import Settings from './components/Settings/settings.js';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/" render={()=><Profile posts={props.posts} />} />
          <Route path="/profile" render={()=><Profile posts={props.posts} />} />
          <Route path="/dialogs" render={()=><Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
