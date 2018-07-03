import React, { Component } from 'react';

class GoogleLogout extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.src = "https://apis.google.com/js/client:platform.js";//"https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();    
    }
    
    //Triggering login for google
    googleLogout = () => {
        var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    }
    
    render() {
        return(
            <div>
                <a href ="/" onclick={()=>this.googleLogout()}>Sign out</a>
                {/* <li className="hamburger-nav-text" onClick={()=>{this.googleLogout()}}>Log out</li> */}
            </div>
        )
    }
}

export default GoogleLogout;