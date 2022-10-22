import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import SimpleNav from "../Components/SimpleNav";
import Axios from 'axios';
function Suppliers() {
    const { id } = useParams();
    const [suppliers, setSuppliers] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getSupplierForProduct?prdid=${id}`)
            .then(res => {
                setSuppliers(res.data.suppliers);
                setProduct(res.data.Product);
            });
    }, []);
    return (
        <React.Fragment>
            <SimpleNav></SimpleNav>
            <div className="container">
                <h4 className="mt-3">Suppliers of {product}</h4>
                <div className="mt-3">
                    {
                        suppliers.map((e) => {
                            return(
                                <React.Fragment>
                                    <div className="card mt-2">
                                        <div className="card-header text-white bg-dark">{e.supplierName}</div>
                                        <div className="card-body">
                                            Email : {e.supplierEmail}
                                            <hr></hr>
                                            Address : {e.supplierAddress}
                                            <hr></hr>
                                            Phone : {e.supplierPhone}
                                        </div>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <a href={"tel:"+e.supplierPhone} className="btn form-control btn-outline-success">Call</a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a href={"mailto:"+e.supplierEmail} className="btn form-control btn-outline-success">Send Mail</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}
export default Suppliers;