import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.image} src="pics/hpic3.jpg" alt="hpic" />
      </div>
      <div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
