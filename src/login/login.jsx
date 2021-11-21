import React, { Component } from 'react';
import './login.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {FormControl, FormGroup, FormLabel, FormText, Form, FormCheck, Button} from 'react-bootstrap';

class Login extends Component {
    render() {
        return (

            <div className="login-container">

              <div className="left-login">
                  
                  <h1>Login</h1>
                  <p className="mb-4">Start working and getting things done.</p>
                  <Form>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                      <FormLabel>Email address or Username</FormLabel>
                      <FormControl type="email" placeholder="Enter email or Username" />
                      <FormText className="text-muted">
                        We'll never share your email with anyone else.
                      </FormText>
                    </FormGroup>

                    <FormGroup className="mb-5" controlId="formBasicPassword">
                      <FormLabel>Password</FormLabel>
                      <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                   
                    <Button variant="primary" size="lg" className="w-100 mb-5">
                      Login
                    </Button>
                  </Form>
                  
                    <Link className="create-new-account text-right">
                      Don't have account yet? Create a new account here
                    </Link>
                </div>
                

              <div className="right-login">
                <div className="title-class">
                  <h1 className="brand">wilbur</h1>
                  <h2 className="brand2">Sales Information System</h2>  
                </div>

                <div className="hero">
                
                </div>
               
              </div>
    
            </div>
        );
    }
}

export default Login;
