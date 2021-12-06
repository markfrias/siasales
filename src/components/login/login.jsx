import React, { Component } from "react";
import { FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";

const Login = () => {
  const [credentials, setCredentials] = setState({userName: "", password: ""})

  // Handles change in the field inputs and syncs with state
  function handleChange(event) {
    let target = event.target;
    setCredentials({ ...credentials, [target.name]: target.value });
  } 
  
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

export default Login;
