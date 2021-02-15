import React from 'react'
import "./Login.css"
import logo from "./logo.jpg";
import {loginUrl} from "../spotify-config.js"

function Login() {
    return (
        <div className="login">
           <img src={logo} alt=""/>
           <a href={loginUrl}> LOGIN TO SPOTIFY </a>
        </div>
    )
}

export default Login;
