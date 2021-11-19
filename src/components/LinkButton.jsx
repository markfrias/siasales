import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import setValidated  from 'react-bootstrap/Form';
import validated from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function LinkButton(props) {
    const history = useHistory();
  
    function handleClick(path) {
      history.push(path);
    }
  
    return (
      <Button
        variant=
        {
          props.variant !== undefined ?
          props.variant + "-primary"
          :
          "primary"
        }
        onClick={() => handleClick(props.link)}
        >
          {props.label}
  
        </Button>
  
    )
  
  
  }

  export default LinkButton