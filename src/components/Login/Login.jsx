import { useState, useEffect } from "react";
import "./Login.scss";
import LoginInput from "./LoginInput";

const Login = () => {


    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-header">
                    <h1>facebook</h1>
                    <h2>
                        Connect with friends and the world
                        <br />
                        around you on Facebook.
                    </h2>
                </div>
                <div className="LoginInput">
                    <LoginInput />
                    {/* <form className="Password">
                        <input type="email" required></input>
                        <input type="password" required></input>
                        <button type="submit">test submit</button>
                    </form> */}
                </div>
            </div> 
        </div>
    );
}

export default Login;