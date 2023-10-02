<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [RoomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const createNewId = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("CREATED ROOM ID");
  };

  const handleJoinClick = () => {
    if (RoomId && username) {
      navigate(`/editor/${RoomId}`, { state: { username: username } });
    } else {
      toast.error("Please enter both ROOM ID and USERNAME.");
    }
  };

=======
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
  

>>>>>>> dev
  return (
    <div className="homePageWrapper">
      <div className="fromPageWrapper">
        <img className="logo-main" src="formImage.png" alt="CURLS" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
<<<<<<< HEAD
            value={RoomId}
            onChange={(e) => setRoomId(e.target.value)}
=======
            value={roomId}
            onChange={handleRoomIdChange}
>>>>>>> dev
            type="text"
            className="inputBox"
            placeholder="ROOM ID:"
          />
          <input
            value={username}
<<<<<<< HEAD
            onChange={(e) => setUsername(e.target.value)}
=======
            onChange={handleUsernameChange}
>>>>>>> dev
            type="text"
            className="inputBox"
            placeholder="USERNAME:"
          />
<<<<<<< HEAD
          <button onClick={handleJoinClick} className="btn joinbtn">
            JOIN
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewId} href="#" className="createNewBtn">
              new room
            </a>
=======
          <button onClick={joinRoom} className="btn joinbtn">JOIN</button>
          <span className="createInfo">
            Don't Have any invitation? &nbsp;
            <button onClick={createNewId} className="newRoom-btn">
              Create Room
            </button>
>>>>>>> dev
          </span>
        </div>
      </div>
      <h4>
<<<<<<< HEAD
        Made with 💛{" "}
        <a href="https://github.com/proudlydumb" className="bottomName">
          ARSHAD
        </a>
=======
        Made with 💛 <a href="https://github.com/proudlydumb" className="bottomName">ARSHAD</a>
>>>>>>> dev
      </h4>
    </div>
  );
};

export default Home;
