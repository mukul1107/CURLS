import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

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

  const joinRoom = () => {
    console.log("Join button clicked.")
    roomId && username
      ? navigate(`/editor/${roomId}`, { state: { username } })
      : toast.error("Please enter both ROOM ID and USERNAME.");
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
          <button onClick={joinRoom} className="btn joinbtn">JOIN</button>
          <span className="createInfo">
            Don't Have any invitation? &nbsp;
            <button onClick={createNewId} className="newRoom-btn">
              Create Room
            </button>
          </span>
        </div>
      </div>
      <h4>
<<<<<<< HEAD
        Made with 💛 <a href="https://github.com/proudlydumb" className="bottomName">ARSHAD</a>
=======
        Made with 💛 <a href="https://github.com/marshadkhn" className="bottomName">ARSHAD</a>
>>>>>>> 9913eff594f3801d87aec5b7c7421e2e604b49d3
      </h4>
    </div>
  );
};

export default Home;
