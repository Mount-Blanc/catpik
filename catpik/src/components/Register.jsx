import React from "react";
import "./Form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorInput from "./ErrorInput";

function Register() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [usernameError, setusernameError] = useState();
  const [passwordError, setpasswordError] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 3) {
      return setusernameError(
        "The username is too short. Please use a longer username"
      );
    } else if ( password.length < 3) {
      return setpasswordError(
        "The password is too short. Please use a longer password"
      );
    }

    if (username.length > 20 || password.length > 20) {
      return setusername(
        "The password is too short. Please use a longer password"
      );
    }

    const userData = { username, password };
    console.log(userData);
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        userData
      );
      console.log("Response:", response);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleUsernameChange}
            id="username"
            placeholder="Choose Username..."
            className={usernameError ? "errorInput" : ""}
          />

          {usernameError && <div className="error">{usernameError}</div>}
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePasswordChange}
            id="password"
            placeholder="Choose Password..."
            className={passwordError ? "errorInput" : ""}
          />
          {passwordError && <div className="error">{passwordError}</div>}
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
