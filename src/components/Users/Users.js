import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/default_user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.content}>
      {pages.map(p => (
        <span key={p}>
          <button
            onClick={() => props.onPageChanged(p)}
            className={props.currentPage === p ? s.selectedPage : undefined}>{p}</button>
        </span>
      ))}
      {props.users.map(u =>
        <div key={u.id}>
          <span>
            <div className={s.avatar}>
              <NavLink to={`profile/${u.id}`}>
                <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} alt="no available" />
              </NavLink>
            </div>
            <div>
              <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={u.followed ? () => props.unfollowUser(u.id) : () => props.followUser(u.id)}>
                {u.followed ? 'Unsubscribe' : 'Subscribe'}
              </button>
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
        </div>
      )}
    </div>
  )
}

export default Users;
