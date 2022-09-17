import React from "react";
import SimpleNav from "../Components/SimpleNav";
function Home() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return (
        <React.Fragment>
            <SimpleNav></SimpleNav>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header bg-dark text-white text-center fw-bold">Purchase</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <input type="text" className="form-control" placeholder="Purchase Invoice Number"></input>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control">
                                    <option defaultValue disabled >Select Supplier</option>
                                    
                                </select>
                            </div>
                        </div>
                        <input type="date" placeholder="Purchase Date" className="mt-3 form-control" defaultValue={today}></input>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <select className="form-control">
                                    <option defaultValue disabled>Select Product</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control">
                                    <option defaultValue disabled>Select Type</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Quantity"></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <input type="number" className="form-control" placeholder="Purchase Price"></input>
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control" placeholder="Retail Price"></input>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-success form-control">Add Purchase</button>
                            </div>
                            <div className="col-md-6" >
                                <button type="reset" className="btn btn-warning form-control">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="card">
                    <div className="card-header bg-dark text-white fw-bold text-center">
                        Issue
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <input type="text" className="form-control" placeholder="Product Name"></input>
                            </div>
                            <div className="col-md-4">
                                <input type="number" className="form-control" placeholder="QTY"></input>
                            </div>
                        </div>
                        <textarea className="form-control mt-3" placeholder="Description"></textarea>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-success form-control">Issue</button>
                            </div>
                            <div className="col-md-6" >
                                <button tyoe="reset" className="btn btn-warning form-control">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;