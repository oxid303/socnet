import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import defaultUserPhoto from '../../../assets/images/default_user.png';

let Users = (props) => {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
      let usersArr = responce.data.items;

      // usersArr.forEach(i => {
      //   if (i.photos.small === null) i.photos.small = defaultUserPhoto;
      // })

      props.setUsers(usersArr);
    });
  }

  let users = props.users.map(u =>
    <div key={u.id}>
      <span>
        <div className={s.avatar}>
          <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} alt="no available" />
        </div>
        <div>
          {<button onClick={() => u.followed ? props.unfollow(u.id) : props.follow(u.id)}>
            {u.followed ? 'Unsubscribe' : 'Subscribe'}
          </button>}
        </div>
      </span>
      <span>
        <div>{u.name}</div>
        <div>{u.status}</div>
      </span>
    </div>
  )
  return (
    <div className={s.content}>
      {users}
    </div>
  )
}

export default Users;
