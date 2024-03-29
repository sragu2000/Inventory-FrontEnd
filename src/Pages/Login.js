import React, { useState } from "react";
import { Link } from "react-router-dom";
import stock from "../Sources/stock.png"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginSubmit = (e) => {
        e.preventDefault();
        var toServer = new FormData();
        toServer.append('email', email);
        toServer.append('password', password);
        fetch("http://127.0.0.1:8000/api/loginUser/", {
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
                alert(data.message);
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
                            <button type="submit" className="btn btn-outline-success mt-3 form-control">Login</button>
                            <button type="reset" className="btn btn-outline-warning mt-3 form-control">Clear</button>
                            <Link to="/signup">
                                <button type="button" className="btn btn-outline-primary mt-3 form-control">Signup</button>
                            </Link>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        </React.Fragment>
    );
}
export default Login;