import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { startCall,endCall } from '../../actions/voipACtions';

const VoIPComponent = () => {
  const [stream, setStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();
  const socket = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current = io.connect('http://localhost:5500');

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      setStream(currentStream);
      myVideo.current.srcObject = currentStream;
    });

    socket.current.on('signal', (data) => {
      peer.signal(data);
    });

    return () => {
      if (peer) peer.destroy();
    };
  }, [peer]);

  const callUser = (userId) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', (data) => {
      socket.current.emit('signal', { signal: data, to: userId });
    });

    peer.on('stream', (userStream) => {
      userVideo.current.srcObject = userStream;
    });

    setPeer(peer);
    dispatch(startCall());
  };

  return (
    <div>
      <video ref={myVideo} autoPlay muted />
      <video ref={userVideo} autoPlay />
      <button onClick={() => callUser('someUserId')}>Call</button>
      <button onClick={() => dispatch(endCall())}>End Call</button>
    </div>
  );
};

export default VoIPComponent;
