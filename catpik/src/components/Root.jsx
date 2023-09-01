import React from "react";
import "./Root.css";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div className="background-container">
      <div className="welcome-container">
        <h1>Welcome to Catpik</h1>
        <Link className="root-button" to="./Login">
          Login
        </Link>
        <Link className="root-button" to="./register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Root;
