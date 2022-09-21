import React, { useState } from "react";
import { Link } from "react-router-dom";
import stock from "../Sources/stock.png"
function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const loginSubmit = (e) => {
        e.preventDefault();
        var toServer = new FormData();
        toServer.append('email', email);
        toServer.append('name', name);
        toServer.append('password', password);
        fetch("http://127.0.0.1:8000/api/addUser/", {
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
                if(data.result === true){
                    alert("Signup Success..Cick login button to login..!");
                }
            })
            .catch(() => {
                console.log("Network connection error");
            });
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <center>
                            <img src={stock} height="100" className="mt-2"></img>
                        </center>
                        <form onSubmit={loginSubmit}>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="mt-3 form-control"
                                placeholder="Name">
                            </input>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="mt-3 form-control"
                                placeholder="Email">
                            </input>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="mt-3 form-control"
                                placeholder="Password">
                            </input>
                            <button type="submit" className="btn btn-outline-success mt-3 form-control">Signup</button>
                            <button type="reset" className="btn btn-outline-warning mt-3 form-control">Clear</button>
                            <Link to="/">
                                <button type="button" className="btn btn-outline-primary mt-3 form-control">Login</button>
                            </Link>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        </React.Fragment>
    );
}
export default Signup;