import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../src/context/Minext";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,Previousprompt,setRecentprompt} = useContext(Context);
  return (
    <div className="sidebar">
      <div className="top">
        <img  onClick={() =>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="Menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="New Chat" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {Previousprompt.map((item,index)=>{
              return(<div className="recent-entry">
                <img src={assets.message_icon} alt="Recent Chat" />
                <p>{item.slice(0,18 )}...</p>
              </div>)
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="Help" />
         {extended? <p>Help</p>:null}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="Activity" />
          {extended? <p>Activity</p>:null}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="Settings" />
          {extended? <p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
