import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
const Ourroutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default Ourroutes;