import React, { useEffect, useState } from "react";
import SimpleNav from "../Components/SimpleNav";
import Axios from 'axios';
function AllTypes() {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/getProductTypes`)
            .then(res => {
                setTypes(res.data.productTypes);
            });
    }, []);
    return (
        <React.Fragment>
            <SimpleNav />
            <div className="container">
            <h4 className="mt-3">Types List</h4><hr></hr>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Type</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            types.map((e) => {
                                return (
                                    <tr key={e.id}>
                                        <td>{e.typeName}</td>
                                        <td>{e.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
export default AllTypes;