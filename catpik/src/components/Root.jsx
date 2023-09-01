import React from "react";
import './Root.css'
import { Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <h1>Welcome to Catpik</h1>
      <Link className="root-button" to='./Login'>Login</Link>    
      <Link className="root-button" to="./register">Register</Link>
    </div>
  );
}

export default Root;
