import React, { Component } from 'react';

import './ContactSearch.css'

import background from "./background.png"
import search from "./search.png"
import action from "./action.png"

import SearchBox from "./SearchBox"

import Hamburger from "../../Hamburger/Hamburger"

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
                <Hamburger />
                <div id="main"className="contactsearch-main">
                    <div id="toggle-btn" className="toggle-btn" onClick={() => { this.handleClick()} }>
                            <span className="burger-icon"></span>
                            <span className="burger-icon"></span>
                            <span className="burger-icon"></span>
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