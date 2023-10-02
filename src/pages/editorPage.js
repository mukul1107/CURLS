import React, { useState, useEffect } from 'react';
import Client from '../componets/Client';
import Editor from '../componets/editor';
import { initSocket } from '../socket';
<<<<<<< HEAD
import ACTIONS from "../Actions"
import { useLocation, useParams } from 'react-router-dom';
const editorPage = () => {
  const { roomId } = useParams();
  const socketRef = useRef(null);
  const loaction = useLocation()
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: loaction.state.username,
      })
    }
    init();
  }, []);
=======
import ACTIONS from '../Actions';
import { useLocation } from 'react-router-dom';

const EditorPage = () => {
  const location = useLocation();
>>>>>>> dev
  const [clients, setClients] = useState([
    { socketId: 1, username: 'Rakesh k' },
    { socketId: 2, username: 'Arshad k' },
  ]);

  useEffect(() => {
    const init = async () => {
      const socketRef = await initSocket();
      socketRef.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state.username,
      });
    };
    init();
  }, [location.state.username]);

  const roomId = '1'; // Replace with your room ID

  return (
    <div className="mainWrapper">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImg" src="/logo.png" alt="logo" />
          </div>
          <h4>Connected</h4>
          <div className="clientList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copybtn">COPY ROOM ID</button>
        <button className="btn leavebtn">LEAVE</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
