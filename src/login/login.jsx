import React, { Component } from 'react';
import './login.css';

import {FormControl, FormGroup, FormLabel, FormText, Form, FormCheck, Button} from 'react-bootstrap';

class Login extends Component {
    render() {
        return (

            
            <div className="login-container">
            <div class="image">
            <div className="left-login">
              <h1>wilbur</h1>
              <p>Sales information system</p>  
            <Form>
  <FormGroup className="mb-3" controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <FormControl type="email" placeholder="Enter email" />
    <FormText className="text-muted">
      We'll never share your email with anyone else.
    </FormText>
  </FormGroup>

  <FormGroup className="mb-3" controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <FormControl type="password" placeholder="Password" />
  </FormGroup>
  <FormGroup className="mb-3" controlId="formBasicCheckbox">
    <FormCheck type="checkbox" label="Check me out" />
  </FormGroup>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>

            <div className="right-login">

            </div>
            </div>
















                
            </div>
        );
    }
}

export default Login;
