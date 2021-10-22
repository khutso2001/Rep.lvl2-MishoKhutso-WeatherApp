import React from 'react';
import {Link} from "react-router-dom";
import "./TopBar.css"
import SearchIcon from '@mui/icons-material/Search';
export default function TopBar() {
const user=false;

    return (
        <div className="top">
            <div className="topLeft">
                <ul >
                    <li className="topIcons fab fa-facebook-square fa-2x"></li>
                    <li className="topIcons fab fa-twitter-square fa-2x"></li>
                    <li className="topIcons fab fa-pinterest-square fa-2x"></li>
                    <li className="topIcons fab fa-instagram-square fa-2x"></li>
                </ul>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItems">
                        <Link  to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>
                    <li className="topListItems">
                        <Link  to="/" style={{textDecoration:"none", color:"inherit"}}>ABOUT</Link>
                    </li>
                    <li className="topListItems">
                        <Link  to="/" style={{textDecoration:"none", color:"inherit"}}>CONTACT</Link>
                    </li>
                    <li className="topListItems">
                        <Link  to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link>
                    </li>
                    <li className="topListItems">
                        <Link  to="/" style={{textDecoration:"none", color:"inherit"}}>{user && "LOGOUT"}</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img 
                             className="topImg"
                            src="topImg.jpg"
                            alt=""
                        />
                    ):(
                        <ul className="topList">
                            <li className="topListItems">
                                <Link  to="/login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link>
                            </li>
                            <li className="topListItems">
                                <Link  to="/register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link>
                            </li>
                        </ul>

                    )
                }
                
                <SearchIcon className="topSerchIcon" sx={{ fontSize: 40 }}/>
            </div>
        </div>
    )
}
