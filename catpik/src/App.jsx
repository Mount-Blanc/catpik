import React from "react";
import Login from './Login';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ErrorPage from './ErrorPage';
import Register from "./Register";
import './App.css'

function App() {
  return(
     <Routes>
        <Route path="/" errorElement={<ErrorPage/>} element={<Login/>} />,
        <Route path="/register" errorElement={<ErrorPage/>} element={<Register/>} />

      </Routes>
  );
}

export default App;
