import React from "react";
import { Nav, Stack } from "react-bootstrap";
import "../assets/stylesheet/side-bar.css";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  return (
    <Nav
      className="side-bar vstack position-fixed top-0 start-0 bottom-0 center c-bg-2"
      activeKey={location.pathname}
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="side-bar-logo d-flex justify-content-center align-items-center bottom-line">
        <h1>LOGO</h1>
      </div>
      <Stack gap={2} className="side-bar-menu p-3 ">
        <Nav.Item className="side-bar-item">
          <Nav.Link href="/">
            <Link to="/">Dashboard</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side-bar-item">
          <Nav.Link href="/tables">
            <Link to="/tables">Tables</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="side-bar-item">
          <Nav.Link href="/activity-log">
            <Link to="/activity-log">Activity Log</Link>
          </Nav.Link>
        </Nav.Item>
      </Stack>
      <div className="spacing bottom-line"></div>
      <div className="side-bar-logout p-3">
        <Nav.Item className="side-bar-item ">
          <Nav.Link href="/log-out">
            <Link to="/log-out">Log Out</Link>
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideBar;
