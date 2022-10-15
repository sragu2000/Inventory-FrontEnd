import React, { useEffect, useState } from "react";
import SimpleNav from "../Components/SimpleNav";
import Axios from 'axios';
function AllSuppliers() {
    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getSuppliers`)
            .then(res => {
                setSuppliers(res.data.suppliers);
            });
    }, []);

    return (
        <React.Fragment>
            <SimpleNav />
            <div className="container">
                <h4 className="mt-3">Suppliers List</h4><hr></hr>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Call</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            suppliers.map((e) => {
                                return (
                                    <React.Fragment>
                                        <tr key={e.id}>
                                            <td>{e.supplierName}</td>
                                            <td>{e.supplierEmail}</td>
                                            <td>{e.supplierAddress}</td>
                                            <td>{e.supplierPhone}</td>
                                            <td>
                                                <a href={"tel:" + e.supplierPhone} className="btn form-control btn-outline-success">Call</a>
                                            </td>
                                            <td>
                                                <a href={"mailto:" + e.supplierEmail} className="btn form-control btn-outline-success">Send Mail</a>
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
export default AllSuppliers;