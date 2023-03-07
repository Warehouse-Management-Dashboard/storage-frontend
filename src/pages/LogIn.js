import React from "react";
import { Button, Stack } from "react-bootstrap";
import "../assets/stylesheet/login.css";
const LogIn = () => {
  return (
    <div className="full-container position-relative">
      <Stack
        className=" login p-4 position-absolute top-50 start-50 translate-middle c-bg-2 rounded box-shadow"
        gap={3}
      >
        <h1 className="h4 text-center">Sign In</h1>
        <form className="vstack gap-3">
          <div className="form-input-container">
            <input type="text" className="form-input" placeholder=" " />
            <label className="form-label-input">Email</label>
          </div>

          <div className="form-input-container">
            <input type="password" className="form-input" placeholder=" " />
            <label className="form-label-input">Password</label>
          </div>
          <div className="form-checkbox-container ">
            <input type="checkbox" id="remember-me" />
            <label className="form-checkbox" for="remember-me"></label>
            <label for="remember-me">Remember Me?</label>
          </div>
          <Button className="button-primary-edit">Sign In</Button>
        </form>
      </Stack>
    </div>
  );
};

export default LogIn;
