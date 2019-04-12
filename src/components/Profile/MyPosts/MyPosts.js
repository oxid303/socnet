import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.js'

const MyPosts = (props) => {

  let posts = props.posts.
    map(item => <Post key={item.id} message={item.message} likesCount={item.likesCount}/>);

  return (
    <div>
      <div>
        <textarea name="" cols="30" rows="3"></textarea>
        <button>Add post</button>
      </div>

      <div className={s.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;
