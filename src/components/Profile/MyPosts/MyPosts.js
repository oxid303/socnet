import React from 'react';
import s from './MyPosts.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.posts.map(item =>
    <Post key={item.id} message={item.message} likesCount={item.likesCount} />);

  let addPostArea = React.createRef();

  let typingPost = () => {
    props.typingPost(addPostArea.current.value);
  };

  let addPost = () => {
    props.addPost();
  };

  return (
    <div className={s.content}>
      <ProfileInfo />
      <div>
        <textarea ref={addPostArea} value={props.postTextArea} onChange={typingPost} />
        <br />
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>
        <br />
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;
