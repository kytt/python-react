import React, { Component } from 'react';

import './Login.css';
import GoogleButton from 'react-google-button'

class GoogleLogin extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js";//"https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();
    }

    //Triggering login for google
    googleLogin = () => {
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: "665957642249-20clvptq5svpv41uk3a2vjs9vfltjv2l.apps.googleusercontent.com",
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login"//"https://www.googleapis.com/auth/plus.login email"
        });
    }

    googleSignInCallback = (e) => {
        //console.log( e )
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    this.getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message)
                console.log('Import error - Error occured while importing data')
                return
            } else if (e.id) {
                //Profile data
                //alert("Successfull login from google : "+ e.displayName )
                //const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
                //const profile = googleUser.getBasicProfile();

                console.log( e );
                //var id_token = googleUser.getAuthResponse().id_token;
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://demodelcontact.appspot.com/postidtoken');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onload = function() {
                    console.log('Signed in as: ' + xhr.responseText);
                };
                xhr.send('idtoken=' + accesstoken);
                console.log(accesstoken);
                return window.location.href="/home"
            }
        }.bind(this));
    }


    render() {
        return(
            <GoogleButton type = "light" className="login-gbutton" onClick={ () => this.googleLogin()}/>
          )
    }
}

export default GoogleLogin;
