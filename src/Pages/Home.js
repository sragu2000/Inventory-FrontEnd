import React, { useEffect, useState } from "react";
import Axios from 'axios';
import SimpleNav from "../Components/SimpleNav";
function Home() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const [invoicenumber, setInvoiceNumber] = useState("");
    const [supplierid, setSupplierId] = useState("");
    const [typeid, setTypeId] = useState("");
    const [productid, setProductId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [purchaseprice, setPurchasePrice] = useState("");
    const [date, setDate] = useState("");


    const [productTypesApi, setProductTypesApi] = useState([]);
    const [productsApi, setProductsApi] = useState([]);
    const [supplierApi, setSupplierApi] = useState([]);

    const [issueProductId, setIssueProductId] = useState("");
    const [issueProductQuantity, setIssueProductQuantity] = useState("");

    const [availableQuantity, setAvailableQuantity] = useState("Loading...");

    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getProductTypes`)
            .then(res => { setProductTypesApi(res.data.productTypes); });
        Axios.get(`http://127.0.0.1:8000/api/getProducts`)
            .then(res => { setProductsApi(res.data.products); });
        Axios.get(`http://127.0.0.1:8000/api/getSuppliers`)
            .then(res => { setSupplierApi(res.data.suppliers); });
    }, []);

    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getAvailableStock?productid=${issueProductId}`)
            .then(res => { setAvailableQuantity(res.data.quantity); });
    }, [issueProductId]);

    var addPurchase = (e) => {
        e.preventDefault();
        var toServer = new FormData();
        toServer.append('invoicenumber', invoicenumber);
        toServer.append('supplierid', supplierid);
        toServer.append('typeid', typeid);
        toServer.append('productid', productid);
        toServer.append('quantity', quantity);
        toServer.append('purchaseprice', purchaseprice);
        toServer.append('date', date);
        fetch("http://127.0.0.1:8000/api/addpurchase/", {
            method: 'POST',
            body: toServer,
            mode: 'cors',
            cache: 'no-cache'
        })
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                }
                else {
                    alert('Backend Error..!');
                    console.log(response.text());
                }
            })
            .then(data => {
                if (data.result === true) {
                    alert("Purchase added successfully!");
                    setQuantity("");
                    setPurchasePrice("");
                } else {
                    alert("Product type not added!");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
    return (
        <React.Fragment>
            {/* <SimpleNav></SimpleNav> */}
            <div className="container mt-3">

                <div className="m-4 shadow">
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs" id="myTab">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link active" data-bs-toggle="tab">Entry Purchase</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#profile" className="nav-link" data-bs-toggle="tab">Entry Issue</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="home">
                                    <div className="card">
                                        <form onSubmit={addPurchase}>
                                            <div className="card-header bg-dark text-white text-center fw-bold">Purchase</div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Purchase Invoice Number"
                                                            value={invoicenumber}
                                                            onChange={(e) => setInvoiceNumber(e.target.value)}>

                                                        </input>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <select className="form-control"
                                                            onChange={(e) => setSupplierId(e.target.value)}
                                                        >
                                                            <option value="" selected disabled>Select a Supplier</option>
                                                            {
                                                                supplierApi.map((e) => {
                                                                    return <option key={e.id} value={e.id}>{e.supplierName}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <input
                                                    type="date"
                                                    placeholder="Purchase Date"
                                                    className="mt-3 form-control"
                                                    defaultValue={today}
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}>

                                                </input>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <select className="form-control"
                                                            onChange={(e) => setTypeId(e.target.value)}
                                                        >
                                                            <option value="" selected disabled>Select a Product Type</option>
                                                            {
                                                                productTypesApi.map((e) => {
                                                                    return <option title={e.description} key={e.id} value={e.id}>{e.typeName}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select className="form-control"
                                                            onChange={(e) => setProductId(e.target.value)}
                                                        >
                                                            <option value="" selected disabled>Select a Product</option>
                                                            {
                                                                productsApi.map((e) => {
                                                                    return <option title={e.description} key={e.id} value={e.id}>{e.prdName}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Quantity"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)}></input>
                                                    </div>

                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-12">
                                                        <input type="number"
                                                            className="form-control"
                                                            placeholder="Purchase Price"
                                                            value={purchaseprice}
                                                            onChange={(e) => setPurchasePrice(e.target.value)}></input>
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
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile">
                                    <div className="card">
                                        <div className="card-header bg-dark text-white fw-bold text-center">
                                            Issue
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <select className="form-control"
                                                        onChange={(e) => setIssueProductId(e.target.value)}
                                                    >
                                                        <option value="" selected disabled>Select a Product</option>
                                                        {
                                                            productsApi.map((e) => {
                                                                return <option title={e.description} key={e.id} value={e.id}>{e.prdName}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <input type="number" className="form-control" placeholder="QTY"></input>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6">
                                                    <div className="alert alert-sm alert-info">
                                                        Available Quantity
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    {(availableQuantity == 0) ?
                                                        <div className="alert alert-sm alert-danger">
                                                            {availableQuantity}
                                                        </div>
                                                        :
                                                        <div className="alert alert-sm alert-success">
                                                            {availableQuantity}
                                                        </div>
                                                }


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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;