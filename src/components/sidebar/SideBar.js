import React from 'react'
import "./sidebar.css"
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sideBarItems">
                <span className="sideBarTitle">ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p>i amndhwbsdoidjhq  bdabsj hba wexwvcu hcwque cuqvw c wdhqj </p>
            </div>
            <div className="sideBarItems">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sidebarList" >
                    <li className="sidebarListItems">Life</li>
                    <li className="sidebarListItems">Music</li>
                    <li className="sidebarListItems">Style</li>
                    <li className="sidebarListItems">Sport</li>
                    <li className="sidebarListItems">Tech</li>
                    <li className="sidebarListItems">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItems">
                <span className="sideBarTitle">FOLLOW US</span>
                <ul className="sidebarSocial">
                    <li className="sideBarIcons fab fa-facebook-square fa-2x"></li>
                    <li className="sideBarIcons fab fa-twitter-square fa-2x"></li>
                    <li className="sideBarIcons fab fa-pinterest-square fa-2x"></li>
                    <li className="sideBarIcons fab fa-instagram-square fa-2x"></li>
                </ul>
            </div>
        </div>
    )
}
