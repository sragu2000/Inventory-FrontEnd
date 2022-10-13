import React, { useEffect, useState } from "react";
import SimpleNav from "../Components/SimpleNav";
import Axios from 'axios';
import { type } from "@testing-library/user-event/dist/type";
function ShowStocks() {
    const [availableProducts, setAvailableProduct] = useState([]);
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getAvailableProducts`)
            .then(res => { setAvailableProduct(res.data.Products); });
    }, []);
    return (
        <React.Fragment>
            <SimpleNav></SimpleNav>
            <div className="container">
                <table className="table table-hover mt-3">
                    <thead>
                        <tr className="table-dark text-white">
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Available Stock</th>
                            <th>At Price</th>
                            <th>Show Suppliers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            availableProducts.map((e) => {
                                // return <option title={e.description} key={e.id} value={e.id}>{e.typeName}</option>
                                return (
                                    <React.Fragment>
                                        <tr className={"align-middle"+ ((e.availableStock < e.msl)? " table-warning" : " table-success")} key={e.productId}>
                                            <td>{e.productName}</td>
                                            <td>{e.type}</td>
                                            <td>{e.availableStock}</td>
                                            <td>{(e.availableStock!==0)?Number(e.price/e.availableStock).toFixed(2):0}</td>
                                            <td>
                                                <a href={"http://127.0.0.1:8000/api/getSupplierForProduct?prdid="+e.productId} className="btn btn-light form-control">Show Suppliers</a>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
export default ShowStocks;