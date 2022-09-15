import React, { useState } from "react";
import stock from "../Sources/stock.png"
function Login() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const loginSubmit=()=>{
        alert("Login Success");
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
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        </React.Fragment>
    );
}
export default Login;