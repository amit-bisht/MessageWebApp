import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCloud } from "@fortawesome/free-solid-svg-icons";

export default function Frontpage() {


  return (
    <div className="flex flex-row h-[100%] items-stretch w-[100%] bg-white">
      <div className="flex items-center justify-center w-[100%]">
        <Outlet />
      </div>
    </div>
  );
}
