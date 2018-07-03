import React, { Component } from 'react';

import './Home.css';

import background from "./background.png"
import log from "./log.png"
import del from "./del.png"
import mail from "./mail.png"
import chat from "./chat.png"

import Hamburger from "../../Hamburger/Hamburger"

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
                <Hamburger />
                <div id="main"className="home-main">
                    <div id="toggle-btn" className="toggle-btn" onClick={() => { this.handleClick()} }>
                        <span className="burger-icon"></span>
                        <span className="burger-icon"></span>
                        <span className="burger-icon"></span>
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