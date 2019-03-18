import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img src="pics/hpic3.jpg" alt="hpic" />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div className={s.posts}>
            New post
        </div>
        <div className={s.item}>
            Post1
        </div>
        <div className={s.item}>
            Post2
        </div>
      </div>
    </div>
  )
}

export default Profile;
