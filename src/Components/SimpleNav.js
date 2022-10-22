import React from "react";
// import { Link } from "react-router-dom";

function SimpleNav() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/home">Home</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/home">Home</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="/add">Add</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="/showstocks">Stocks</a>
                            </li>
                            <li className="nav-item dropdown fw-bold">
                                <a href="/supplierList" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Show
                                </a>
                                <ul className="dropdown-menu fw-bold" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/supplierList">Suppliers</a></li>
                                    <li><a className="dropdown-item" href="/typesList">Types</a></li>
                                    {/* <li><hr className="dropdown-divider"></hr></li> */}
                                    <li><a className="dropdown-item" href="/showstocks">Products</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default SimpleNav;