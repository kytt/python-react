import React, { Component } from 'react';

import './Login.css';
import background from './background.png'
import GoogleLogin from './GoogleLogin';
import {Link} from 'react-router-dom'
class Login extends Component {
  render() {
    return (  
      <div>
        <img src={background} className="login-bg"/>
        <h1 className="login-title">tangerine</h1>
        <Link to="/home">
          <GoogleLogin />
        </Link>
      </div>
    );
  }
}

export default Login;

        