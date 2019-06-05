import React from 'react';
import s from './ProfileInfo.module.css';
import widePicture from '../../../../assets/images/wide_pic.jpg';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.image} src={widePicture} alt="no available" />
      </div>
      <div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
