import React from 'react'
import "./register.css"
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="enter your username..."/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="enter your email..."/>
                <label>password</label>
                <input type="password" className="registerInput"  placeholder="enter your password..."/>
                <button className="registerButton">Login</button>
            </form>
            <button className="registerButton">
            <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>login</Link>

            </button>
        </div>
    )
}
