import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
