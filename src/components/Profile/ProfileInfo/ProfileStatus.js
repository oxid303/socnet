import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false, status: this.props.status }
  }

  activateEditMode() {
    this.setState(() => ({ editMode: true }));
  }

  deactivateEditMode() {
    this.props.typingStatus(this.state.status);
    this.setState(() => ({ editMode: false }));
  }

  typingStatus(text) {
    this.props.typingStatus(text.target.value);
  }

  onKeyPress(target) {
    if (target.charCode === 13) {
      this.props.setStatus(this.props.status)
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ?
          <div>
            <input
              onKeyPress={this.onKeyPress.bind(this)}
              autoFocus
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.props.status}
              onChange={this.typingStatus.bind(this)} />
          </div>
          :
          <div>
            <span onClick={this.activateEditMode.bind(this)}>
              {this.props.status || 'set a status'}
            </span>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;
