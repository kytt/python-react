import React, { Component } from 'react';

import './ContactSearch.css'

import {Link} from 'react-router-dom'

import background from "./background.png"
import profilePic from "./profilepic.png"
import profileBg from "./profilebg.png"
import homeIcon from "./homeicon.png"
import profileIcon from "./profileicon.png"
import searchIcon from "./searchicon.png"
import logIcon from "./logicon.png"
import outIcon from "./outicon.png"

import search from "./search.png"

import SearchBox from "./SearchBox"

import action from "./action.png"

class ContactSearch extends Component {
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
        document.getElementById("searchbox").classList.toggle("active");
    }
    render () {
        return (
            <div>
                <div id="slidebar" className="home-sidebar">
                    <ul className="home-nav">
                        <img src={profilePic} id="profile-pic" className="home-profile-pic"/>
                        <li><img src={profileBg} className="home-profile-bg"/></li>
                        <Link to="/Home" className="home-no-hyperlink"><li className="home-nav-text">Home</li></Link>
                        <li className="home-nav-text">User Profile</li>
                        <Link to="/ContactSearch" className="home-no-hyperlink"><li className="home-nav-text">Contact Search</li></Link>
                        <Link to="AuditLog" className="home-no-hyperlink"><li className="home-nav-text">Audit Log</li></Link>
                        <li className="home-nav-text">Log out</li>
                        <Link to="/Home"><img src={homeIcon} id="home-icon" className="home-home-icon"/></Link>
                        <img src={profileIcon} id="profile-icon" className="home-profile-icon"/>
                        <Link to="/ContactSearch"><img src={searchIcon} id="search-icon" className="home-search-icon"/></Link>
                        <Link to="/AuditLog"><img src={logIcon} id="log-icon" className="home-log-icon"/></Link>
                        <img src={outIcon} id="out-icon" className="home-out-icon"/>
                    </ul>
                </div>
                <div id="main"className="contactsearch-main">
                    <div id="toggle-btn" className="home-toggle-btn" onClick={() => { this.handleClick()} }>
                            <span className="home-burger"></span>
                            <span className="home-burger"></span>
                            <span className="home-burger"></span>
                    </div>
                    <img src={background} className="contactsearch-title-bg"/>
                    <h1 id="title" className="contactsearch-title-text">tangerine</h1>
                    <h2 id="head" className="contactsearch-head-text">Contact Search</h2>
                    <div id="searchbox" className="contactsearch-search-box">
                            <SearchBox />
                    </div>
                    <img src={search} className="contactsearch-search-icon"/>
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Subject</th>
                            <th scope="col">Date</th>
                            <th scope="col">Sender</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Test Mail Recall(6)</th>
                            <td>26/6/2018</td>
                            <td>logdemo@dev.tangerine.co.th</td>
                            <td>Doing</td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">Test Mail Recall(5)</th>
                            <td>25/6/2018</td>
                            <td>logdemo@dev.tangerine.co.th</td>
                            <td>Completed</td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">Test Mail Recall(4)</th>
                            <td>22/6/2018</td>
                            <td>logdemo@dev.tangerine.co.th</td>
                            <td>Completed</td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">Test Mail Recall(3)</th>
                            <td>20/6/2018</td>
                            <td>logdemo@dev.tangerine.co.th</td>
                            <td>Completed</td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">Test Mail Recall(2)</th>
                            <td>19/6/2018</td>
                            <td>logdemo@dev.tangerine.co.th</td>
                            <td>Completed</td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">Test Mail Recall(1)</th>
                            <td>18/6/2018</td>
                            <td>logdemo@dev.tangerine.co.th</td>
                            <td>Completed</td>
                            <td><img src={action}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ContactSearch;