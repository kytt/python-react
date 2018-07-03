import React, { Component } from 'react';

import './Home.css';

import {Link} from 'react-router-dom'

import profilePic from "./profilepic.png"
import background from "./background.png"
import profileBg from "./profilebg.png"
import homeIcon from "./homeicon.png"
import profileIcon from "./profileicon.png"
import searchIcon from "./searchicon.png"
import logIcon from "./logicon.png"
import outIcon from "./outicon.png"
import log from "./log.png"
import del from "./del.png"
import mail from "./mail.png"
import chat from "./chat.png"

class Home extends Component {
    handleClick() {
        document.getElementById("slidebar").classList.toggle("active");
        document.getElementById("toggle-btn").classList.toggle("active");
        document.getElementById("main").classList.toggle("active");
        document.getElementById("title").classList.toggle("active");
        document.getElementById("profile-pic").classList.toggle("active");
        document.getElementById("home-icon").classList.toggle("active");
        document.getElementById("profile-icon").classList.toggle("active");
        document.getElementById("search-icon").classList.toggle("active");
        document.getElementById("log-icon").classList.toggle("active");
        document.getElementById("out-icon").classList.toggle("active");
    }
    render() {
        return (
            <div>
                
                <div id="slidebar" className="home-sidebar">
                    <ul className="home-nav">
                        <img src={profilePic} id="profile-pic" className="home-profile-pic"/>
                        <li><img src={profileBg} className="home-profile-bg"/></li>
                        <Link to="/Home" className="home-no-hyperlink"><li className="home-nav-text">Home</li></Link>
                        <li className="home-nav-text">User Profile</li>
                        <Link to="/ContactSearch" className="home-no-hyperlink"><li className="home-nav-text">Contact Search</li></Link>
                        <Link to="/AuditLog" className="home-no-hyperlink"><li className="home-nav-text">Audit Log</li></Link>
                        <li className="home-nav-text">Log out</li>
                        <Link to="/Home"><img src={homeIcon} id="home-icon" className="home-home-icon"/></Link>
                        <img src={profileIcon} id="profile-icon" className="home-profile-icon"/>
                        <Link to="/ContactSearch"><img src={searchIcon} id="search-icon" className="home-search-icon"/></Link>
                        <Link to="/AuditLog"><img src={logIcon} id="log-icon" className="home-log-icon"/></Link>
                        <img src={outIcon} id="out-icon" className="home-out-icon"/>
                    </ul>
                </div>
                <div id="main"className="home-main">
                    <div id="toggle-btn" className="home-toggle-btn" onClick={() => { this.handleClick()} }>
                        <span className="home-burger"></span>
                        <span className="home-burger"></span>
                        <span className="home-burger"></span>
                    </div>
                    <img src={background} className="home-title-bg"/>
                    <h1 id="title" className="home-title-text">tangerine</h1>
                    <h2 className="home-head-text">Service</h2>
                    <img src={log} className="home-icons"/>
                    <img src={del} className="home-icons"/>
                    <img src={mail} className="home-icons"/>
                    <img src={chat} className="home-icons"/>
                </div>
            </div>
        );
    }
}
export default Home;