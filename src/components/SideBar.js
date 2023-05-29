import React from "react";
import { Image, Nav, Stack } from "react-bootstrap";
import "../assets/stylesheet/side-bar.css";
import { NavLink } from "react-router-dom";
import {
  BarChart,
  Table,
  Clipboard,
  BoxArrowRight,
  Bag,
  Tag,
  CurrencyDollar,
} from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";

const SideBar = ({ sideBarClassName, sideBarOpenHandle }) => {
  return (
    <>
      <Nav
        className={`side-bar vstack position-fixed top-0 bottom-0 center c-bg-2 ${sideBarClassName}`}
        style={{ zIndex: 1100 }}
      >
        <div className="side-bar-logo d-flex justify-content-center align-items-center bottom-line position-relative">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <Image src={logo} width={40} height={40} />
            <span className="fs-1 mx-3">WMS</span>
          </div>
          <div
            className="  sidebar-close-button p-1 c-bg-3 c-bg-hover box-shadow rounded position-absolute top-50 start-100 translate-middle"
            onClick={sideBarOpenHandle}
          >
            <ArrowLeft size="24px" className="d-block" />
          </div>
        </div>
        <Stack gap={2} className="side-bar-menu p-3 bottom-line">
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold" }}
            className="c-text-muted"
          >
            PAGES
          </Typography>
          <Nav.Item className="side-bar-item">
            <NavLink className="nav-link" to="/" state="Overview">
              <BarChart className="mb-1" />
              <p className="d-inline ms-2">Overview</p>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="side-bar-item ">
            <NavLink className="nav-link" to="/tables" state="Tables">
              <Table className="mb-1" />
              <p className="d-inline ms-2">Tables</p>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="side-bar-item ">
            <NavLink
              className="nav-link"
              to="/activity-log"
              state="Activity Log"
            >
              <Clipboard className="mb-1" />
              <p className="d-inline ms-2">Activity Log</p>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="side-bar-item ">
            <NavLink className="nav-link" to="/category" state="CATEGORY">
              <Tag className="mb-1" />
              <p className="d-inline ms-2">Category</p>
            </NavLink>
          </Nav.Item>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold" }}
            className="c-text-muted"
          >
            ACTION
          </Typography>
          <Nav.Item className="side-bar-item">
            <NavLink
              className="nav-link"
              to="/order-product"
              state="Order Product"
            >
              <Bag className="mb-1" />
              <p className="d-inline ms-2">Order Product</p>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="side-bar-item ">
            <NavLink
              className="nav-link"
              to="/sell-product"
              state="Sell Product"
            >
              <CurrencyDollar className="mb-1" />
              <p className="d-inline ms-2">Sell Product</p>
            </NavLink>
          </Nav.Item>
        </Stack>

        <div className="side-bar-logout p-3">
          <Nav.Item className="side-bar-item ">
            <NavLink
              className="nav-link"
              to="/log-out"
              onClick={() => localStorage.clear("token")}
            >
              <BoxArrowRight className="mb-1" />
              <p className="d-inline ms-2">Log Out</p>
            </NavLink>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
};

export default SideBar;
