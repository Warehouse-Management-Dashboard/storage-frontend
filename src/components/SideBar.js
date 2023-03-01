import React from "react";
import { Nav, Stack } from "react-bootstrap";
import "../assets/stylesheet/side-bar.css";
const SideBar = () => {
  return (
    <Nav
      className="side-bar vstack position-fixed top-0 start-0 bottom-0 center c-bg-2"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="side-bar-logo d-flex justify-content-center align-items-center bottom-line">
        <h1>LOGO</h1>
      </div>
      <Stack gap={2} className="side-bar-menu p-3 ">
        <Nav.Item className="side-bar-item">
          <Nav.Link href="/home">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item className="side-bar-item">
          <Nav.Link eventKey="link-1">Tables</Nav.Link>
        </Nav.Item>
        <Nav.Item className="side-bar-item">
          <Nav.Link eventKey="link-2">Activity Log</Nav.Link>
        </Nav.Item>
      </Stack>
      <div className="spacing bottom-line"></div>
      <div className="side-bar-logout p-3">
        <Nav.Item className="side-bar-item ">
          <Nav.Link eventKey="disabled">Log Out</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideBar;
