import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.js'

const MyPosts = (props) => {

  let posts = props.state.posts.map(item => <Post key={item.id} message={item.message} likesCount={item.likesCount}/>);

  let addPostArea = React.createRef();

  let typing = () => {
    props.dispatch({type: 'typing', message: addPostArea.current.value});
  };

  let addPost = () => {
    props.dispatch({type: 'add-post'});
  };

  return (
    <div>
      <div>
        <textarea name="" cols="30" rows="3" ref={addPostArea} value={props.state.textArea} onChange={typing} />
        <br/>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>
        <br/>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;
