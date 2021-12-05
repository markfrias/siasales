import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/Form';
import setValidated  from 'react-bootstrap/Form';
import validated from 'react-bootstrap/Form';
import LinkButton from '../components/LinkButton';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
  
} from "react-router-dom";


function Registration() {
    let { path, url } = useRouteMatch();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
   

      <div class="row pageContainer">
        <div class="title-image">
          <div class="title">
              <div class="r1-text">
                <h1>wilbur</h1>
                <p>Sales Information System</p>
              </div>
          </div>
          <div class="image">

            </div>
        </div>

        <Switch>
            <Route path={`${path}/:1`} /> 
        </Switch>

       
        
      </div>

  );
}

export default Registration;