import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarItems = ['profile', 'dialogs', 'users', 'music', 'settings'];

  const navbar = navbarItems.map((item, i) =>
    <div key={i} className={s.item}>
      <NavLink to={`/${item}`} activeClassName={s.active}>
        <div className={s.link}>
          {item.charAt(0).toUpperCase() + item.substr(1)}
        </div>
      </NavLink>
    </div>);

  return (
    <nav className={s.nav}>
      {navbar}
    </nav>
  );
};

export default Navbar;
