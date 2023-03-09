import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import "../assets/stylesheet/main-layout.css";
const MainLayout = () => {
  const [sideBarOpen, setSideBarOpen] = useState("open");
  const sideBarOpenHandle = () => {
    sideBarOpen === "open" ? setSideBarOpen(" ") : setSideBarOpen("open");
  };
  return (
    <>
      <SideBar
        sideBarClassName={sideBarOpen}
        sideBarOpenHandle={sideBarOpenHandle}
      />
      <main className={`main-layout-container ${sideBarOpen}`}>
        <HeaderBar sideBarOpenHandle={sideBarOpenHandle} />
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
