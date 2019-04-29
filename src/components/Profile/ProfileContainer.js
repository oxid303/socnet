import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import MyPosts from './MyPosts/MyPosts.js';
import s from './ProfileContainer.module.css';
import { typePostCreator, addPostCreator } from '../Redux/profileReducer';

const ProfileContainer = (props) => {

  let state = props.store.getState().profile;

  let typePost = (text) => {
    props.store.dispatch(typePostCreator(text));
  };

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={state.posts}
        postTextArea={state.postTextArea}
        typePost={typePost}
        addPost={addPost} />
    </div>
  )
}

export default ProfileContainer;
