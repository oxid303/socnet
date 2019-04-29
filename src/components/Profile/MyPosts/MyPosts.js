import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.js';

const MyPosts = (props) => {

  let posts = props.posts.map(item =>
    <Post key={item.id} message={item.message} likesCount={item.likesCount} />);

  let addPostArea = React.createRef();

  let typePost = () => {
    props.typePost(addPostArea.current.value);
  };

  let addPost = () => {
    props.addPost();
  };

  return (
    <div>
      <div>
        <textarea ref={addPostArea} value={props.postTextArea} onChange={typePost} />
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
