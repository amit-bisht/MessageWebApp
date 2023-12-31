import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/apiContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faUsers,
  faDoorOpen,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebookMessenger,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

const NavItem = (props) => {
  let navigate = useNavigate();
  const {
    theme,
    accessData,
    setChat,
    SetMsgType,
    setChatBoxHeaderName,
    setChannelHeaderName,
    setChatLoading,
    setShowSideBarMembersList,
    setPopUpMessageList,
  } = useContext(ApiContext);

  const parseName = (name) => {
    return name.replace(name.charAt(), name.charAt().toUpperCase());
  };

  return (
    <div
      className={`grid  aspect-square  max-w-[70px] p-1   hover:cursor-pointer ${props.className}`}
      onClick={() => {
        props.name === "logout"
          ? navigate("/Slackapp/Login", { replace: true })
          : SetMsgType(props.msgtype);
        setChatBoxHeaderName(`Welcome, User ${accessData.id}!`);
        setChannelHeaderName(
          props.name === "messages"
            ? "Direct Messages"
            : props.name === "channels"
            ? "Channels"
            : "Home"
        );
        setChat("");
        setChatLoading(false);
        setShowSideBarMembersList(false);
        setPopUpMessageList([]);
      }}
      title={parseName(props.name)}
    >
      <FontAwesomeIcon
        icon={
          props.name === "logo" && theme === "dark"
            ? faSlack
            : props.name === "logo" && theme === "light"
            ? faSlack
            : props.name === "messages"
            ? faMessage
            : props.name === "channels"
            ? faUsers
            : props.name === "logout"
            ? faDoorOpen
            : faIcons
        }
        className="w-[100%] h-[100%]"
        style={{color:'white'}}
      />
    </div>
  );
};
export default NavItem;
