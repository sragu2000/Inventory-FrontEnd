import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SimpleNav from "../Components/SimpleNav";
import Axios from 'axios';
function ModifyTransactions() {
    const { id } = useParams();
    const [lastPurchase, setLastPurchase] = useState({});
    const [lastIssue, setLastIssue] = useState({});
    const [product, setProduct] = useState("");
    // const [newIssue, setNewIssue] = useState("");
    // const [newPurchase, setNewPurchase] = useState("");
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getTransactions?prdid=${id}`)
            .then(res => {
                setLastPurchase(res.data.LastPurchase);
                setLastIssue(res.data.LastIssue);
                setProduct(res.data.product);
            });
    }, []);
    console.log(lastPurchase)
    console.log(lastIssue)
    // var editOneTransaction = (productId, eventType, transactionId) => {
    //     alert("Editing transaction feature is disabled !");
    //     // var newQuantity = prompt("Enter new Quantity: ");
    //     // var toServer = new FormData();
    //     // toServer.append("productId",productId );
    //     // toServer.append('eventType',eventType );
    //     // toServer.append('transactionId',transactionId);
    //     // toServer.append('newQuantity',newQuantity);
    //     // fetch("URL", {
    //     //     method: 'POST',
    //     //     body: toServer,
    //     //     mode: 'no-cors',
    //     //     cache: 'no-cache'
    //     // })
    //     //     .then(response => {
    //     //         if (response.status == 200) {
    //     //             return response.json();
    //     //         }
    //     //         else {
    //     //             alert('Backend Error..!');
    //     //             console.log(response.text());
    //     //         }
    //     //     })
    //     //     .then(data => {
    //     //         alert(data.message); window.location.reload();
    //     //     })
    //     //     .catch(() => {
    //     //         console.log("Network connection error");
    //     //         alert("Reloading"); window.location.reload();
    //     //     });
    // }
    return (
        <React.Fragment>
            <SimpleNav></SimpleNav>
            <div className="container">
                <div className="card mt-3">
                    <div className="card-header fw-bold">
                        <Link className="btn btn-secondary" to={"/showTransactions/" + id}>Product : {product} : Show Transactions</Link>
                    </div>
                    <div className="card-body">
                        <div className="alert alert-warning">
                            * YOU CAN ONLY CHANGE THE QUANTITY OF LAST TRANSACTION
                        </div>
                        <div className="card">
                            <div className="card-header bg-dark text-white">Last Issue</div>
                            <div className="card-body">
                                <form>
                                    <label>Last Issue on <b>{lastIssue.date}</b></label>
                                    <input
                                        type="number"
                                        value={lastIssue.quantity}
                                        className="form-control"
                                        // onChange={(e) => setNewIssue(e.target.value)}
                                    ></input>
                                    <button type="submit" className=" mt-2 btn btn-outline-primary form-control">Update</button>
                                </form>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="card">
                            <div className="card-header bg-dark text-white">Last Purchase</div>
                            <div className="card-body">
                                <form>
                                    <label>Last Purchase on <b>{lastPurchase.date}</b></label>
                                    <input
                                        type="number"
                                        value={lastPurchase.quantity}
                                        className="form-control"
                                        // onChange={(e) => setNewPurchase(e.target.value)}
                                    ></input>
                                    <label>at Price</label>
                                    <input
                                        type="number"
                                        value={lastPurchase.purchasePrice}
                                        className="form-control"
                                        // onChange={(e) => setNewPurchase(e.target.value)}
                                    ></input>
                                    <button type="submit" className=" mt-2 btn btn-outline-primary form-control">Update</button>


                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ModifyTransactions;