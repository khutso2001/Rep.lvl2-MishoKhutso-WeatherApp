import React from 'react'
import "./login.css"
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="enter your email..."/>
                <label>password</label>
                <input type="password" className="loginInput"  placeholder="enter your password..."/>
                <button className="loginButton">Login</button>
            </form>
            <button className="registerButton">
                <Link to="/register" style={{textDecoration:"none", color:"inherit"}}>Register</Link>
            </button>
        </div>
    )
}
