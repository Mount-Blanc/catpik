import React from "react";
import Login from './components/Login';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Register from "./components/Register";
import Root from './components/Root';
import './App.css'
import Dashboard from "./components/Dashboard";


function App() {
  return(
    <>
     <Routes>
      <Route path='/' errorElement={<ErrorPage/>} element={<Root/>} />
        <Route path="/Login" errorElement={<ErrorPage/>} element={<Login/>} />,
        <Route path="/register" errorElement={<ErrorPage/>} element={<Register/>} />
        <Route path="/dashboard" errorElement={<ErrorPage/>} element={<Dashboard/>} />

      </Routes>
      </>
  );
}

export default App;
