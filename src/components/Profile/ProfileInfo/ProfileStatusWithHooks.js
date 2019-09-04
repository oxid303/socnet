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
      {editMode
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
          <span
            onClick={props.statusIsFetching ? undefined : activateEditMode}
            className={props.statusIsFetching ? s.statusIsFetching : undefined}>
            {props.statusIsFetching ? 'updating...' : props.status || 'set a status'}
          </span>
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;
