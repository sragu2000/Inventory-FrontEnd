import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SimpleNav from "../Components/SimpleNav";
import Axios from 'axios';
function Transactions() {
    const { id } = useParams();
    const [transactions, setTransactions] = useState([]);
    const [product, setProduct] = useState("");
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getTransactions?prdid=${id}`)
            .then(res => { 
                setTransactions(res.data.transactions); 
                setProduct(res.data.product);
            });
    }, []);
    return (
        <React.Fragment>
            <SimpleNav></SimpleNav>
            <div className="container">
                <table className="table text-center table-bordered table-hover mt-3">
                    <thead>
                        <tr className="table-light">
                            <th colSpan={6}>Transactions of Product : {product}</th>
                        </tr>
                        <tr className="table-light">
                            <th colSpan={6}>In WAC Method</th>
                        </tr>
                        <tr className="table-primary">
                            <th colSpan={3}>Purchase</th>
                            <th colSpan={3}>Issues</th>
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
                                                <td>{e.quantity}</td>
                                                <td>{e.price}</td>
                                                <td>{e.quantity * e.price}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </React.Fragment>

                                        :
                                        <React.Fragment>
                                            <tr className={"align-middle table-warning"}>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{e.quantity}</td>
                                                <td>{e.price}</td>
                                                <td>{e.quantity * e.price}</td>
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
export default Transactions;