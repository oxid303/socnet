import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../assets/images/header_logo.png';

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to={'/'}>
        <img src={headerLogo} alt="ant" />
      </NavLink>
    </header>
  );
};

export default Header;
