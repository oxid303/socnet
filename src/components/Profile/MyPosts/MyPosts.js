import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.js';
import { typePostCreator, addPostCreator } from '../../Redux/profileReducer';

const MyPosts = (props) => {

  let posts = props.state.posts.map(item =>
    <Post key={item.id} message={item.message} likesCount={item.likesCount} />);

  let addPostArea = React.createRef();

  let type = () => {
    props.dispatch(typePostCreator(addPostArea.current.value));
  };

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  return (
    <div>
      <div>
        <textarea ref={addPostArea} value={props.state.textArea} onChange={type} />
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
