import React, { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "../assets/stylesheet/login.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [authSuccess, setAuthSuccess] = useState(false);

  const handleSignIn = async (e) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_SERVER_API_URL}/api/auth/login`, {
          email,
          password,
        })
        .then(async (response) => {
          localStorage.setItem("token", response.data.token);
          window.location.reload();
          setTimeout(() => {
            navigate("/");
          }, 0);
        });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const token = getToken();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

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
            id="password"
            label="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="button-primary-edit"
            onClick={() => handleSignIn()}
          >
            Sign In
          </Button>
        </form>
        {error && (
          <Alert severity="error" sx={{ bgcolor: "#6b1c1c7d" }}>
            Username or Password Wrong
          </Alert>
        )}
      </Stack>
    </div>
  );
};

export default Login;
