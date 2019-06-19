import React from 'react';
import s from './ProfileInfo.module.css';
import widePicture from '../../../assets/images/wide_pic.jpg';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={s.image} src={widePicture} alt="no available" />
      </div>
      <div className={s.fullName}>
        {props.userInfo ? props.userInfo.fullName : 'Not Autorized'}
      </div>
    </div>
  )
}

export default ProfileInfo;
