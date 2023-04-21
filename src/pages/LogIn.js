import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "../assets/stylesheet/login.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="full-container position-relative">
      <Stack
        className=" login p-4 position-absolute top-50 start-50 translate-middle c-bg-2 rounded box-shadow"
        gap={3}
      >
        <h1 className="h4 text-center">Sign In</h1>
        <form className="vstack gap-3">
          <TextField
            id="email"
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error
            id="password"
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            label="Remember Me?"
            control={
              <Checkbox
                value={rememberMe}
                //  checked={}
                onChange={() => setRememberMe(!rememberMe)}
                color="primary"
              />
            }
          />
          <Button className="button-primary-edit" type="submit">
            Sign In
          </Button>
        </form>
        <Alert severity="error" sx={{ bgcolor: "#6b1c1c7d" }}>
          UI/UX ngambek karena ga digaji
        </Alert>
      </Stack>
    </div>
  );
};

export default Login;
