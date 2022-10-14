import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SimpleNav from "../Components/SimpleNav";
import Axios from 'axios';
function ModifyTransactions() {
    const { id } = useParams();
    const [transactions, setTransactions] = useState([]);
    const [product, setProduct] = useState("");
    const [availableProducts, setAvailableProduct] = useState([]);
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getTransactions?prdid=${id}`)
            .then(res => {
                setTransactions(res.data.transactions);
                setProduct(res.data.product);
            });


        Axios.get(`http://127.0.0.1:8000/api/getAvailableProducts?prdid=${id}`)
            .then(res => { setAvailableProduct(res.data.Products); });

    }, []);
    return (
        <React.Fragment>
            <SimpleNav></SimpleNav>
            <div className="container">
                <table className="table text-center table-bordered table-hover mt-3">
                    <thead>
                        {availableProducts.map((e) => {
                            return (
                                <React.Fragment>
                                    <tr className="table-light" style={{ "textAlign": "left" }}>
                                        <th colSpan={9}>
                                            <h6>Product : {e.productName}</h6>
                                            <h6>Type : {e.type}</h6>
                                            <h6>Available Stock : {e.availableStock}</h6>
                                            <h6>At Price : {(e.availableStock !== 0) ? Number(e.price / e.availableStock).toFixed(2) : 0}</h6>
                                            <h6>Method :&nbsp;
                                                <a href="https://www.unleashedsoftware.com/blog/weighted-average-cost-method-inventory-valuation#:~:text=In%20the%20weighted%20average%20cost,specific%20costs%20to%20single%20units.">Weighted Average Cost (WAC)</a>
                                            </h6>
                                        </th>
                                    </tr>
                                </React.Fragment>
                            )
                        })}

                        <tr className="table-primary">
                            <th rowSpan={2} className="table-dark">Date</th>
                            <th colSpan={3}>Purchase</th>
                            <th colSpan={3}>Issues</th>
                            <th rowSpan={2} className="table-dark">EDIT</th>
                            <th rowSpan={2} className="table-dark">Delete</th>
                        </tr>
                        <tr className="table-dark text-white">
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((e) => {
                                return (
                                    (e.event == 1)
                                        ?
                                        <React.Fragment>
                                            <tr className={"align-middle table-success"}>
                                                <td>{e.date}</td>
                                                <td>{e.quantity}</td>
                                                <td>{Number(e.price).toFixed(2)}</td>
                                                <td>{Number(e.quantity * e.price).toFixed(2)}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <button className="btn btn-warning form-control">Edit</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger form-control">Delete</button>
                                                </td>
                                            </tr>
                                        </React.Fragment>

                                        :
                                        <React.Fragment>
                                            <tr className={"align-middle table-warning"}>
                                                <td>{e.date}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{e.quantity}</td>
                                                <td>{Number(e.price).toFixed(2)}</td>
                                                <td>{Number(e.quantity * e.price).toFixed(2)}</td>
                                                <td>
                                                    <button className="btn btn-warning form-control">Edit</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger form-control">Delete</button>
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
export default ModifyTransactions;