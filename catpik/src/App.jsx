import React from "react";
import Form from './Form';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ErrorPage from './ErrorPage';


function App() {
  return(
     <Routes>
        <Route path="/" errorElement={<ErrorPage/>} element={<Form/>} />
      </Routes>
  );
}

export default App;
