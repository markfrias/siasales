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
                      <FormLabel>Email address or Username</FormLabel>
                      <FormControl type="email" placeholder="Enter email or Username" />
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
                    <Button variant="primary" type="submit" className="btn1">
                      Login
                    </Button>
                  </Form>
                  <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                    </p>
                    <p className="create-new-account text-right">
                      Don't have account yet? <a href="#">Create a New account here</a>
                    </p>
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
