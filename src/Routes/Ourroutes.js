import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "../Pages/Add";
import Home from "../Pages/Home";
// import Login from "../Pages/Login"; -- login: not implemented
import Signup from "../Pages/Signup";
import ShowStocks from "../Pages/ShowStocks";
import Suppliers from "../Pages/Suppliers";
import Transactions from "../Pages/Transactions";
import ModifyTransactions from "../Pages/ModifyTransactions";
import AllSuppliers from "../Pages/AllSuppliers";
import AllTypes from "../Pages/AllTypes";
const Ourroutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/showstocks" element={<ShowStocks />} />
          <Route exact path="/showSuppliers/:id" element={<Suppliers />} />
          <Route exact path="/showTransactions/:id" element={<Transactions />} />
          <Route exact path="/modifyTransactions/:id" element={<ModifyTransactions />} />
          <Route exact path="/supplierList" element={<AllSuppliers />} />
          <Route exact path="/typesList" element={<AllTypes />} />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default Ourroutes;