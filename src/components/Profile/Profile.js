import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import MyPosts from './MyPosts/MyPosts.js';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts state={props.state} />
    </div>
  )
}

export default Profile;
