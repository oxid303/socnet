import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to={'/'}>
        <img src="http://localhost:3000/pics/ant.png" alt="ant" />
      </NavLink>
    </header>
  );
};

export default Header;
