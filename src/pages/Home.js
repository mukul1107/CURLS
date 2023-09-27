import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { toast } from 'react-hot-toast';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewId = () => {
    const id = uuidV4();
    setRoomId(id);
    toast.success('CREATED ROOM ID');
  };

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="homePageWrapper">
      <div className="fromPageWrapper">
        <img className="logo-main" src="formImage.png" alt="CURLS" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            value={roomId}
            onChange={handleRoomIdChange}
            type="text"
            className="inputBox"
            placeholder="ROOM ID:"
          />
          <input
            value={username}
            onChange={handleUsernameChange}
            type="text"
            className="inputBox"
            placeholder="USERNAME:"
          />
          <button className="btn joinbtn">JOIN</button>
          <span className="createInfo">
            Don't Have any invitation? &nbsp;
            <button onClick={createNewId} className="newRoom-btn">
              Create Room
            </button>
          </span>
        </div>
      </div>
      <h4>
        Made with 💛 <a href="https://github.com/proudlydumb" className="bottomName">ARSHAD</a>
      </h4>
    </div>
  );
};

export default Home;
