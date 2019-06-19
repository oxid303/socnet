import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/default_user.png';
import { NavLink } from 'react-router-dom';
import { followUser, unfollowUser } from '../../api/api';

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
              <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={u.followed ?
                () => {
                  props.toggleFollowingInProgress(u.id, true);
                  unfollowUser(u.id)
                    .then(resultCode => {
                      if (resultCode === 0) props.unfollow(u.id);
                      props.toggleFollowingInProgress(u.id, false);
                    })
                } :
                () => {
                  props.toggleFollowingInProgress(u.id, true);
                  followUser(u.id)
                    .then(resultCode => {
                      if (resultCode === 0) props.follow(u.id);
                      props.toggleFollowingInProgress(u.id, false);
                    })
                }}>
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
