import React, { Component } from 'react';
import './login.css';

import {FormControl, FormGroup, FormLabel, FormText, Form, FormCheck, Button} from 'react-bootstrap';

class Login extends Component {
    render() {
        return (

            <div className="login-container">

              <div className="left-login">
                  
                  <h1>Login</h1>
                  <p>Start working and getting things done.</p>
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
                      <FormCheck type="checkbox" label="Remember Me" />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Form>
                </div>

              <div className="right-login">
                <div className="title-class">
                  <h1 className="brand">wilbur</h1>
                  <h2 className="brand2">Sales information system</h2>  
                </div>

                <div className="hero">
                
                </div>
               
              </div>
    
            </div>
        );
    }
}

export default Login;
