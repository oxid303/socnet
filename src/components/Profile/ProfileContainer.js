import MyPosts from './MyPosts/MyPosts.js';
import { typePostCreator, addPostCreator } from '../../Redux/profileReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    postTextArea: state.profile.postTextArea
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    typePost: (text) => {
      dispatch(typePostCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
    }
  }
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ProfileContainer;
