import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
const Ourroutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default Ourroutes;