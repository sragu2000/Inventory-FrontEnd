import React from "react";
import SimpleNav from "../Components/SimpleNav";
function Add() {
    return (
        <React.Fragment>
            <SimpleNav></SimpleNav>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-white bg-dark text-center fw-bold">
                                Add Supplier
                            </div>
                            <form>
                                <div className="card-body">
                                    <input type="text" className="form-control mt-3" placeholder="Supplier Name"></input>
                                    <input type="email" className="form-control mt-3" placeholder="Supplier Email"></input>
                                    <input type="text" className="form-control mt-3" placeholder="Supplier Address"></input>
                                    <input type="number" className="form-control mt-3" placeholder="Supplier Phone Number"></input>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-success form-control">Add Supplier</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="reset" className="btn btn-warning form-control">Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-white bg-dark text-center fw-bold">
                                Add Product
                            </div>
                            <form>
                                <div className="card-body">
                                    <input type="text" className="form-control mt-3" placeholder="Product Name"></input>
                                    <select className="form-control mt-3">
                                        <option selected disabled>Select Type</option>
                                    </select>
                                    <input type="number" className="form-control mt-3" placeholder="Minimum Stock Level"></input>
                                    <textarea className="form-control mt-3" placeholder="Description">

                                    </textarea>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-success form-control">Add Product</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="reset" className="btn btn-warning form-control">Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-white bg-dark text-center fw-bold">
                                Add Type
                            </div>
                            <form>
                                <div className="card-body">
                                    <input type="text" className="form-control mt-3" placeholder="Type Name"></input>
                                    <textarea className="form-control mt-3" placeholder="Description"></textarea>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-success form-control">Add Type</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="reset" className="btn btn-warning form-control">Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Add;
