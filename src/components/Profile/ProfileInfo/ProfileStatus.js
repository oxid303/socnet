import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status
    }
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false });
  }

  typingStatus = (text) => {
    this.setState({ status: text.currentTarget.value });
  }

  onPressEnter = (target) => {
    if (target.charCode === 13) {
      this.props.updateStatus(this.state.status);
      this.deactivateEditMode();
    }
  }

  handleFocus = (event) => {
    event.target.select();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ?
          <div>
            <input
              onKeyPress={this.onPressEnter}
              autoFocus
              onFocus={this.handleFocus}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              onChange={this.typingStatus} />
          </div>
          :
          <div>
            <span onClick={this.activateEditMode}>
              {this.props.status || 'set a status'}
            </span>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;
