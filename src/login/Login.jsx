import React, { Component, useEffect, useState } from 'react';
import './login.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {FormControl, FormGroup, FormLabel, FormText, Form, FormCheck, Button, Spinner} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


const Login = (props) => {

  const [credentials, setCredentials] = useState({userName: "", password: ""});
  const [loginLoading, setLoginLoading] = useState(false);

  // Handles change in the field inputs and syncs with state
  function handleChange(event) {
    let target = event.target;
    setCredentials({ ...credentials, [target.name]: target.value });
  } 

  // Handles submission of credentials to server
  function handleLoginClick() {
    setLoginLoading(true);
    submitLogin()
    .then(data => {
      data.status !== "Success"
      ? setLoginLoading(false)
      : props.setLoginSuccess(true)
    })
  }

  async function submitLogin() {
    const data = {
      userName: credentials.userName,
      password: credentials.password
    }

    const response = await fetch("/users/login", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }


// Render login page if login hasn't yet been initiated or login failed
if (!props.loginSuccess) {
  return (

    <div className="login-container">

      <div className="left-login">
          
          <h1>Login</h1>
          <p>Start working and getting things done.</p>
          
          <Form>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Username</FormLabel>
              <FormControl name="userName" value={credentials.userName} onChange={handleChange} type="email" placeholder="Enter your username" />
            </FormGroup>

            <FormGroup className="mb-5" controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} />
            </FormGroup>
           
            <Button variant="primary" size="lg" className="w-100 mb-5" onClick={handleLoginClick}>
              {
              loginLoading ? <Spinner animation="border" size="sm" className="loadingSpinner" />
              :  "Login"
              }

            </Button>
          </Form>
          
            <Link to="/registration/1" className="create-new-account text-right">
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
} else {
  return <Redirect to="/SalesGraph" />
}
  
}

export default Login;
