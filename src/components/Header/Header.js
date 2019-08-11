import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../assets/images/header_logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to='/'>
        <div className={s.logoBlock}>
          <img src={headerLogo} alt="ant" />
        </div>
      </NavLink>

      {props.logoutInProcess ? undefined :
        props.isAuth
          ?
          <div className={s.loginBlock} onClick={props.logoutMe}>
            <span className={s.loginUserName}>Logout</span>
          </div>
          :
          <NavLink className={s.loginBlock} to='/login'>
            <span className={s.loginUserName}>Login</span>
          </NavLink>
      }
    </header>
  );
};

export default Header;
