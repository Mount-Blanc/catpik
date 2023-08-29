import React from "react";
import Login from './Login';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ErrorPage from './ErrorPage';

import './App.css'

function App() {
  return(
     <Routes>
        <Route path="/" errorElement={<ErrorPage/>} element={<Login/>} />
      </Routes>
  );
}

export default App;
