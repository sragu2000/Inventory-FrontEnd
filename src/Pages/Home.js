import React from "react";
function Home() {
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header">Purchase</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <input type="text" className="form-control" placeholder="Purchase Invoice Number"></input>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control">
                                    <option disabled selected>Select Supplier</option>
                                    <option>Option2</option>
                                </select>
                            </div>
                        </div>
                        <input type="date" placeholder="Purchase Date" className="mt-3 form-control"></input>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <select className="form-control">
                                    <option selected disabled>Select Product</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control">
                                    <option selected disabled>Select Type</option>
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
                                <button type="submit"></button>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;