import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../assets/images/header_logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to={'/'}>
        <div className={s.logoBlock}>
          <img src={headerLogo} alt="ant" />
        </div>
      </NavLink>


      {/* <NavLink to={props.isAuth ? '/profile' : '/login'}>
        <div className={s.loginBlock}>
          <span className={s.loginUserName}>
            {props.isAuth ? props.login : 'Login'}
          </span>
        </div>
      </NavLink> */}

      <NavLink to='/login'>
        <div className={s.loginBlock} onClick={props.logoutMe}>
          <span className={s.loginUserName}>
            {props.isAuth ? 'Logout' : 'Login'}
          </span>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
