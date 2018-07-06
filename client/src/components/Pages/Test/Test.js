import React, { Component } from 'react';

import axios from 'axios'

class Test extends Component {
    handleClick() {
        axios.get('http://demodelcontact.appspot.com/api')
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.handleClick()}}>Click Me</button>
            </div>
        );
    }
}

export default Test;