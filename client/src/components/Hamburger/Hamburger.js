import React, { Component } from 'react';

import './Hamburger.css';

import {Link} from 'react-router-dom'

import profilePic from "./profilepic.png"
import profileBg from "./profilebg.png"
import homeIcon from "./homeicon.png"
import profileIcon from "./profileicon.png"
import searchIcon from "./searchicon.png"
import logIcon from "./logicon.png"
import outIcon from "./outicon.png"

class Hamburger extends Component {
    render() {
        return (
            <div id="slidebar" className="hamburger-sidebar">
                <ul className="hamburger-nav">
                    <img src={profilePic} id="profile-pic" className="hamburger-profile-pic"/>
                    <li><img src={profileBg} className="hamburger-profile-bg"/></li>
                    <Link to="/home"><img src={homeIcon} id="home-icon" className="hamburger-home-icon"/></Link>
                    <Link to="/home" className="hamburger-no-hyperlink"><li className="hamburger-nav-text">Home</li></Link>
                    <img src={profileIcon} id="profile-icon" className="hamburger-profile-icon"/>
                    <li className="hamburger-nav-text">User Profile</li>
                    <Link to="/contactSearch"><img src={searchIcon} id="search-icon" className="hamburger-search-icon"/></Link>
                    <Link to="/contactSearch" className="hamburger-no-hyperlink"><li className="hamburger-nav-text">Contact Search</li></Link>
                    <Link to="/auditLog"><img src={logIcon} id="log-icon" className="hamburger-log-icon"/></Link>
                    <Link to="/auditLog" className="hamburger-no-hyperlink"><li className="hamburger-nav-text">Audit Log</li></Link>
                    <img src={outIcon} id="out-icon" className="hamburger-out-icon"/>
                    <li className="hamburger-nav-text">Log out</li>
                </ul>
            </div>
        );
    }
}

export default Hamburger;