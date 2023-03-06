import React from "react";
import { Nav, Stack } from "react-bootstrap";
import "../assets/stylesheet/side-bar.css";
import { NavLink } from "react-router-dom";
import {
  BarChart,
  Table,
  Clipboard,
  BoxArrowRight,
} from "react-bootstrap-icons";

const SideBar = () => {
  return (
    <Nav className="side-bar vstack position-fixed top-0 start-0 bottom-0 center c-bg-2">
      <div className="side-bar-logo d-flex justify-content-center align-items-center bottom-line">
        <h1>LOGO</h1>
      </div>
      <Stack gap={2} className="side-bar-menu p-3 bottom-line">
        <Nav.Item className="side-bar-item">
          <NavLink className="nav-link" to="/" state="Dashboard">
            <BarChart className="mb-1" />
            <p className="d-inline ms-2">Dashboard</p>
          </NavLink>
        </Nav.Item>
        <Nav.Item className="side-bar-item ">
          <NavLink className="nav-link" to="/tables" state="Tables">
            <Table className="mb-1" />
            <p className="d-inline ms-2">Tables</p>
          </NavLink>
        </Nav.Item>
        <Nav.Item className="side-bar-item ">
          <NavLink className="nav-link" to="/activity-log" state="Activity Log">
            <Clipboard className="mb-1" />
            <p className="d-inline ms-2">Activity Log</p>
          </NavLink>
        </Nav.Item>
      </Stack>

      <div className="side-bar-logout p-3">
        <Nav.Item className="side-bar-item ">
          <NavLink className="nav-link" to="/log-out">
            <BoxArrowRight className="mb-1" />
            <p className="d-inline ms-2">Log Out</p>
          </NavLink>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideBar;
