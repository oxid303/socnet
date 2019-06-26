import Dialogs from './Dialogs';
import { addMessageCreator, typingMessageCreator } from '../../Redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    users: state.dialogs.users,
    messages: state.dialogs.messages,
    messageTextArea: state.dialogs.messageTextArea
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
