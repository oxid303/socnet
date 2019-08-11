import React from 'react';
import './App.css';
import { initializeApp } from './Redux/appReducer';
import { withRouter, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginContainer from './components/Login/LoginContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <></>
    };

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/" render={() => <ProfileContainer />} />
          <Route exact path="/profile/" render={() => <ProfileContainer />} />
          <Route path="/profile/:userId" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
