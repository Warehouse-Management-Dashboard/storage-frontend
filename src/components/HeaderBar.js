import React from "react";
import { List } from "react-bootstrap-icons";
import "../assets/stylesheet/header-bar.css";
import { useLocation } from "react-router-dom";

const HeaderBar = ({ sideBarOpenHandle }) => {
  const location = useLocation();

  return (
    <header className="header w-100 px-3 box-shadow c-bg-2 d-flex align-items-center">
      <div
        className="hamburger-menu me-3 p-1 c-bg-hover rounded"
        onClick={sideBarOpenHandle}
      >
        <List size="24px" />
      </div>
      <h1 className="h3 d-block mb-0 ">
        {location.state ? location.state : "Dashboard"}
      </h1>
    </header>
  );
};

export default HeaderBar;
