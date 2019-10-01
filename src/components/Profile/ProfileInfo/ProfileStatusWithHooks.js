import React, { useState, useEffect } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const handleFocus = (event) => {
    event.target.select();
  }

  const typingStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

  const onPressEnter = (target) => {
    if (target.charCode === 13) {
      props.updateStatus(status);
      setEditMode(false);
    }
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    setStatus(props.status);
  }

  return (
    <div>
      {!props.isMyProfile
        ? <span>{props.status}</span>
        : props.statusIsFetching
          ? <span className={s.statusIsFetching}>updating...</span>
          : editMode
            ?
            <div>
              <input
                autoFocus
                onFocus={handleFocus}
                onBlur={deactivateEditMode}
                value={status}
                onChange={typingStatus}
                onKeyPress={onPressEnter}
              />
            </div>
            :
            <div>
              <span onClick={activateEditMode}>
                {props.status || 'set a status'}
              </span>
            </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;
