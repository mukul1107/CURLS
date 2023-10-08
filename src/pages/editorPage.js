import React, { useState, useEffect } from "react";
import Client from "../components/Client";
import Editor from "../components/editor";
import { initSocket } from "../socket";
import ACTIONS from "../Actions";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import copy from "copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditorPage = () => {
  const navigate = useNavigate();
  const { roomId } = useParams(); // Correct usage of useParams
  const onLeave = ()=>{
    navigate("/");
    toast.success('YOU LEFT ROOM');
  }

  const location = useLocation();
  const [clients, setClients] = useState([
    { socketId: 1, username: "Rakesh k" },
    { socketId: 2, username: "Arshad k" },
  ]);

  const [style, changeStyle] = useState("");
  useEffect(() => {
    const init = async () => {
      const socketRef = await initSocket();
      socketRef.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state.username,
      });
    };
    init();

  }, [location.state.username, roomId]); // Include roomId in the dependency array

  function copyRoomId() {
    changeStyle("copied");
    copy(roomId); // Use roomId here

  }
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
        <button onClick={copyRoomId} className="btn copybtn " id={style}>
          {style === "copied" ? "Copied" : "Copy Room ID"}
        </button>
        <button className="btn leavebtn" onClick={()=>{onLeave()}}>LEAVE</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
