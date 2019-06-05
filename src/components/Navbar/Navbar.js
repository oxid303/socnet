import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // const navbarItems = ['profile', 'dialogs', 'users', 'music', 'settings'];
  // const navbar = navbarItems.map( (item, i) =>
  //   <div key={i} className={s.item}>
  //     <NavLink to={item} activeClassName={s.active}>
  //       <div className={s.link}>
  //         {item.charAt(0).toUpperCase() + item.substr(1)}
  //     </div>
  //     </NavLink>
  //   </div>);
    
  return (
    <nav className={s.nav}>
      {/* {navbar} */}
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
        <NavLink to="/users" activeClassName={s.active}>
          <div className={s.link}>
            Users
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
