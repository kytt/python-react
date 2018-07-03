import React, { Component } from 'react';

import './Login.css';

import {Link} from 'react-router-dom'

import background from './background.png'

import GoogleLogin from './GoogleLogin';

class Login extends Component {
  render() {
    return (  
      <div>
        <img src={background} className="login-bg"/>
        <h1 className="login-title">tangerine</h1>
          <GoogleLogin />
      </div>
    );
  }
}

export default Login;

        