import React from "react";
import NavItem from "../components/Navbar/NavItem";

export default function Navbar() {
  return (
    <div className="nav-bar flex flex-col items-center  h-[100%] p-2.5 gap-[0.8rem] overflow-y-auto z-[3]" style={{ backgroundColor: '#4a154b' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',margin:'2px 0px 0px 5px' }}>
        <NavItem name="logo" id="logo" />
        <span style={{ color: '#4a154b',fontSize:'14px',fontFamily:'Slack-Lato, Slack-Fractions, appleLogo, sans-serif' }}>Thread</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',margin:'2px 0px',fontFamily:'Slack-Lato, Slack-Fractions, appleLogo, sans-serif' }}>
        <NavItem name="messages" msgtype={"User"} />
        <span style={{ color: 'white', margin: '0px 2px',fontSize:'14px' }}>Message</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',margin:'2px 0px',fontFamily:'Slack-Lato, Slack-Fractions, appleLogo, sans-serif' }}>
        <NavItem name="channels" msgtype={"Channel"} />
        <span style={{ color: 'white', margin: '0px 2px',fontSize:'14px' }}>Channel</span>
      </div>
      
      <NavItem name="logout" className="mt-auto" />
      <span style={{ color: 'white',fontSize:'14px' }}>Logout</span>
    </div>
  );
}
