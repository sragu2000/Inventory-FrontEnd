import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "../Pages/Add";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ShowStocks from "../Pages/ShowStocks";
const Ourroutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/showstocks" element={<ShowStocks />} />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default Ourroutes;