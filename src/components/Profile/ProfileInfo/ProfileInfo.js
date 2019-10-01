import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatusWithHooks';
import defaultUserPhoto from '../../../assets/images/default_user.png';

const ProfileInfo = (props) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img src={props.userInfo.photos.large || defaultUserPhoto} alt="Profile" />
      </div>
      <div className={s.fullName}>
        {props.userInfo.fullName}
      </div>
      <div className={s.status}>
        <ProfileStatus
          status={props.status}
          statusIsFetching={props.statusIsFetching}
          updateStatus={props.updateStatus}
          isMyProfile={props.isMyProfile} />
      </div>
    </div>
  )
}

export default ProfileInfo;
