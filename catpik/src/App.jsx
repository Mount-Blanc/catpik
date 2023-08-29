import React from "react";
import Login from './components/Login';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Register from "./components/Register";
import './App.css'

function App() {
  return(
    <>
    <h1>CatPik</h1>
     <Routes>
        <Route path="/" errorElement={<ErrorPage/>} element={<Login/>} />,
        <Route path="/register" errorElement={<ErrorPage/>} element={<Register/>} />

      </Routes>
      </>
  );
}

export default App;
