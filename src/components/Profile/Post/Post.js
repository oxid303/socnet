import React from 'react';
import s from './Post.module.css';
import defaultUserPhoto from '../../../assets/images/default_user.png';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.userPhoto || defaultUserPhoto} alt="no available"/>
      {props.message}
      <div>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;
