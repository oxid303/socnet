import Dialogs from './Dialogs';
import { addMessageCreator, typingMessageCreator } from '../../Redux/dialogsReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    users: state.dialogs.users,
    messages: state.dialogs.messages,
    messageTextArea: state.dialogs.messageTextArea,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    typingMessage: (text) => {
      dispatch(typingMessageCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageCreator());
    }
  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
