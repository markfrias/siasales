import React, { Component } from 'react';
import {FormControl, FormGroup, FormLabel, FormText }  from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
           <div>
               <FormGroup className="mb-3" controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <FormControl type="email" placeholder="Enter email" />
    <FormText className="text-muted">
      We'll never share your email with anyone else.
    </FormText>
  </FormGroup>
           </div>
        );
    }
}

export default Login;
