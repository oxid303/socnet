import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          <div className={s.link}>
            Profile
          </div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          <div className={s.link}>
            Dialogs
          </div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          <div className={s.link}>
            News
          </div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          <div className={s.link}>
            Music
          </div>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          <div className={s.link}>
            Settings
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
