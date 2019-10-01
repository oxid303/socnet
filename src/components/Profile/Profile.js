import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileForm/ProfileForm';
import Post from './Post/Post';

const MyPosts = (props) => {

  // let myRef = React.createRef();

  // let onChange = () => {
  //   props.myFunction(myRef.current.value);
  // };

  // <textarea ref={myRef} onChange={onChange} />

  const onSubmitForm = (formData) => {
    props.addPost(formData.post);
  }

  return (
    <div className={s.container}>
      <ProfileInfo
        userInfo={props.userInfo}
        status={props.status}
        updateStatus={props.updateStatus}
        statusIsFetching={props.statusIsFetching}
        isMyProfile={props.isMyProfile} />
        
      <ProfileForm onSubmit={onSubmitForm} />

      <div className={s.posts}>{props.posts.map(item =>
        <Post
          key={item.id}
          message={item.message}
          likesCount={item.likesCount} />)}
      </div>
    </div>
  )
}

export default MyPosts;
