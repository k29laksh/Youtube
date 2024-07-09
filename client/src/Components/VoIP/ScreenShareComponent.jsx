import React from 'react';

const ScreenShareComponent = ({ startScreenShare }) => {
  return (
    <button onClick={startScreenShare}>Share Screen</button>
  );
};

export default ScreenShareComponent;
