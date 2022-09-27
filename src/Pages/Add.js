import React, { useEffect, useState } from "react";
import Axios from 'axios';
import SimpleNav from "../Components/SimpleNav";
function Add() {
    const [productTypeLoadAgain, setProductTypeLoadAgain] = useState(1);
    // add product type
    const [productTypesApi, setProductTypesApi] = useState([]);
    const [typeName, setTypeName] = useState("");
    const [typeDesc, setTypeDesc] = useState("");
    // add products
    const [productName, setProuctName] = useState("");
    const [minStockLev, setMinStockLev] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productType, setProuctType] = useState("");
    // add supplier
    const [supplierName, setSupplierName] = useState("");
    const [supplierAddress, setSupplierAddress] = useState("");
    const [supplierEmail, setSupplierEmail] = useState("");
    const [supplierPhone, setSupplierPhone] = useState("");
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getProductTypes`)
            .then(res => {
                setProductTypesApi(res.data.productTypes);
            })
    }, [productTypeLoadAgain]);

    var addType = (e) => {
        e.preventDefault();
        var toServer = new FormData();
        toServer.append('typename', typeName);
        console.log(typeName);
        console.log(typeDesc);
        toServer.append('description', typeDesc);
        fetch("http://127.0.0.1:8000/api/addtype/", {
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
                    alert("Product type added successfully!");
                    setTypeName("");
                    setTypeDesc("");
                    let num = productTypeLoadAgain + 1;
                    setProductTypeLoadAgain(num);
                } else {
                    alert("Product type not added!");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    var addProduct = (e) => {
        e.preventDefault();
        var toServer = new FormData();
        toServer.append('productName', productName);
        toServer.append('minimumStockLevel', minStockLev);
        toServer.append('type', productType);
        toServer.append('description', productDescription);
        fetch("http://127.0.0.1:8000/api/addproduct/", {
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
                    alert("Product added successfully!");
                    setProuctName("");
                    setMinStockLev("");
                    setProductDescription("");
                    setProuctType("");
                } else {
                    alert("Product type not added!");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    var addSupplier = (e) => {
        e.preventDefault();
        var toServer = new FormData();
        toServer.append('name', supplierName);
        toServer.append('email', supplierEmail);
        toServer.append('address', supplierAddress);
        toServer.append('phone', supplierPhone);
        fetch("http://127.0.0.1:8000/api/addsupplier/", {
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
                    alert("Supplier added successfully!");
                    setProuctName("");
                    setMinStockLev("");
                    setProductDescription("");
                    setProuctType("");
                } else {
                    alert("Supplier not added!");
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
                                    <a href="#home" className="nav-link active" data-bs-toggle="tab">Add Supplier</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#profile" className="nav-link" data-bs-toggle="tab">Add Type</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#messages" className="nav-link" data-bs-toggle="tab">Add Product</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="home">
                                    <div className="card">
                                        <div className="card-header text-white bg-dark text-center fw-bold">
                                            Add Supplier
                                        </div>
                                        <form onSubmit={addSupplier}>
                                            <div className="card-body">
                                                <input 
                                                    type="text" 
                                                    className="form-control mt-3" 
                                                    placeholder="Supplier Name"
                                                    value={supplierName}
                                                    onChange={(e) => setSupplierName(e.target.value)}>
                                                </input>
                                                <input 
                                                    type="email"
                                                    className="form-control mt-3" 
                                                    placeholder="Supplier Email"
                                                    value={supplierEmail}
                                                    onChange={(e) => setSupplierEmail(e.target.value)}>
                                                </input>
                                                <input 
                                                    type="text" 
                                                    className="form-control mt-3" 
                                                    placeholder="Supplier Address"
                                                    value={supplierAddress}
                                                    onChange={(e) => setSupplierAddress(e.target.value)}>
                                                </input>
                                                <input 
                                                    type="number" 
                                                    className="form-control mt-3" 
                                                    placeholder="Supplier Phone Number"
                                                    value={supplierPhone}
                                                    onChange={(e) => setSupplierPhone(e.target.value)}>
                                                </input>
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
                                <div className="tab-pane fade" id="profile">
                                    <div className="card">
                                        <div className="card-header text-white bg-dark text-center fw-bold">
                                            Add Type
                                        </div>
                                        <form onSubmit={addType}>
                                            <div className="card-body">
                                                <input
                                                    type="text"
                                                    className="form-control mt-3"
                                                    placeholder="Type Name"
                                                    value={typeName}
                                                    onChange={(e) => setTypeName(e.target.value)}>
                                                </input>
                                                <textarea
                                                    className="form-control mt-3"
                                                    placeholder="Description"
                                                    value={typeDesc}
                                                    onChange={(e) => setTypeDesc(e.target.value)}
                                                >
                                                </textarea>
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
                                <div className="tab-pane fade" id="messages">
                                    <div className="card">
                                        <div className="card-header text-white bg-dark text-center fw-bold">
                                            Add Product
                                        </div>
                                        <form onSubmit={addProduct}>
                                            <div className="card-body">
                                                <input
                                                    type="text"
                                                    className="form-control mt-3"
                                                    placeholder="Product Name"
                                                    value={productName}
                                                    onChange={(e) => setProuctName(e.target.value)}>
                                                </input>
                                                <select className="form-control mt-3"
                                                    onChange={(e) => setProuctType(e.target.value)}
                                                >
                                                    <option value="" selected disabled>Select a Product</option>
                                                    {
                                                        productTypesApi.map((e) => {
                                                            return <option title={e.description} key={e.id} value={e.id}>{e.typeName}</option>
                                                        })
                                                    }
                                                </select>
                                                <input
                                                    type="number"
                                                    className="form-control mt-3"
                                                    placeholder="Minimum Stock Level"
                                                    value={minStockLev}
                                                    onChange={(e) => setMinStockLev(e.target.value)}
                                                >
                                                </input>
                                                <textarea
                                                    className="form-control mt-3"
                                                    placeholder="Description"
                                                    value={productDescription}
                                                    onChange={(e) => setProductDescription(e.target.value)}>
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
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Add;
