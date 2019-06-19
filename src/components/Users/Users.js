import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/default_user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
              <button onClick={u.followed ?
                () => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "11413268-0a83-4855-8886-a27de6220b24"
                    }
                  })
                    .then(responce => {
                      console.log(responce);
                      if (responce.data.resultCode === 0) props.unfollow(u.id);
                    }).catch(error => console.log(error))
                } :
                () => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "11413268-0a83-4855-8886-a27de6220b24"
                    }
                  })
                    .then(responce => {
                      console.log(responce);
                      if (responce.data.resultCode === 0) props.follow(u.id);
                    }).catch(error => console.log(error))
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
