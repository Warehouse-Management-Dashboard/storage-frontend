import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import "../assets/stylesheet/main-layout.css";
const MainLayout = () => {
  return (
    <>
      <SideBar />
      <main className="main-layout-container">
        <HeaderBar />
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
