import React, { Component } from 'react';

import "./AuditLog.css"

import {Link} from 'react-router-dom'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import background from "./background.png"
import profilePic from "./profilepic.png"
import profileBg from "./profilebg.png"
import homeIcon from "./homeicon.png"
import profileIcon from "./profileicon.png"
import searchIcon from "./searchicon.png"
import logIcon from "./logicon.png"
import outIcon from "./outicon.png"
import action from "./action.png"
import filter from "./filter.png"

import SelectDate from "./SelectDate"
import SearchBox from "./SearchBox"
import DropDown from "./DropDown"

class AuditLog extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          popoverOpen: false
        };
      }
    
      toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      }
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
                <div id="main"className="auditlog-main">
                    <div id="toggle-btn" className="home-toggle-btn" onClick={() => { this.handleClick()} }>
                            <span className="home-burger"></span>
                            <span className="home-burger"></span>
                            <span className="home-burger"></span>
                    </div>
                    <img src={background} className="contactsearch-title-bg"/>
                    <h1 id="title" className="contactsearch-title-text">tangerine</h1>
                    <h2 id="head" className="contactsearch-head-text">Audit Log</h2>
                    <div>
                        <img src={filter} id="Popover1" className="auditlog-filter" onClick={this.toggle}/>
                        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                        <PopoverHeader><SelectDate /></PopoverHeader>
                        <PopoverHeader>User <SearchBox /></PopoverHeader>
                        <PopoverHeader><DropDown /></PopoverHeader>
                        </Popover>
                    </div>
                    <table class="table table-sm table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Message</th>
                            <th scope="col">User</th>
                            <th scope="col">IP Address</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">20/6/2018</th>
                            <td>Search</td>
                            <td>logdemo@dev.tangerine.co.th</td>
                            <td>192.168.1.1</td>
                            <td>domain: dev.tangerine.co.th <br></br>
                                dev.tangerine.co.th.test-google-a.Com <br></br>
                                test.com<br></br>
                                dev.com
                            </td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">22/6/2018</th>
                            <td>Login</td>
                            <td>logindemo@tangerine.co.th</td>
                            <td>192.168.1.254</td>
                            <td>domain: tangerine.co.th <br></br>
                                tangerine.co.th <br></br>
                                login.com <br></br>
                                test.co.th <br></br>
                            </td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">25/6/2018</th>
                            <td>Delete</td>
                            <td>deletedemo@admin.tangerine.co.th</td>
                            <td>161.246.1.1</td>
                            <td>domain: admin.tangerine.co.th <br></br>
                                admin.tangerine.co.th <br></br>
                                delete.com <br></br>
                                erase.co.th
                            </td>
                            <td><img src={action}/></td>
                            </tr>
                            <tr>
                            <th scope="row">26/6/2018</th>
                            <td>Retrieve</td>
                            <td>retrievedemo@admin.tangerine.co.th</td>
                            <td>161.246.1.254</td>
                            <td>domain: admin.tangerine.co.th <br></br>
                                admin.tangerine.co.th <br></br>
                                retrieve.com <br></br>
                                getback.co.th
                            </td>
                            <td><img src={action}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AuditLog;