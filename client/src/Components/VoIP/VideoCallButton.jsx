import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkTimeRestrictions } from '../../actions/voipACtions';

const VideoCallButton = () => {
  const [disabled, setDisabled] = useState(false);
  const isAllowed = useSelector((state) => state.voip.isAllowed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkTimeRestrictions());
  }, [dispatch]);

  useEffect(() => {
    setDisabled(!isAllowed);
  }, [isAllowed]);

  return (
    <button disabled={disabled} onClick={() => console.log('Start Call')}>
      {disabled ? 'Calls Disabled' : 'Start Call'}
    </button>
  );
};

export default VideoCallButton;
