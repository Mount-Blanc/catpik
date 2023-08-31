import React from "react";
import './Root.css'
function Root() {
  return (
    <div>
      <h1>Welcome to Catpik</h1>
      <a className="root-button" href="/login">Login</a>
      < a className="root-button" href="/register">Register</a>
    </div>
  );
}

export default Root;
