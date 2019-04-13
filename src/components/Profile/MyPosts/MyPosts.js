import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.js'

const MyPosts = (props) => {

  let posts = props.state.posts.map(item => <Post key={item.id} message={item.message} likesCount={item.likesCount}/>);

  let addPostArea = React.createRef();
  let addPost = () => {
    let text = addPostArea.current.value;
    props.funcs.addPost(text);
    addPostArea.current.value = '';
  };

  return (
    <div>
      <div>
        <textarea name="" cols="30" rows="3" ref={addPostArea}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;
