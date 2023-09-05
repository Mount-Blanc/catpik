import React from "react";
import "./Form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorInput from "./ErrorInput";

function Login() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 3 || password.length < 3) {
      return;
    }

    if (username.length > 20 || password.length > 20) {
      return;
    }

    const userData = { username, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        userData
      );
      console.log("Response:", response);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUsername = (event) => {
    setusername(event.target.value);
  };
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleUsername}
            value={username}
            id="username"
            placeholder="Enter Username"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handlePassword}
            value={password}
            id="password"
            placeholder="Enter Password"
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
