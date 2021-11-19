import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import setValidated  from 'react-bootstrap/Form';
import validated from 'react-bootstrap/Form';
import React, {useState} from 'react';
import LinkButton from '../components/LinkButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Registration3() {

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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div class="row pageContainer">
        <div class="title-image">
            <div class="title">
              <div class="r3-text">
                <h1>wilbur</h1>
                <p>Sales Information System</p>
              </div>
            </div>
            
            <div class="image">

            </div>
        </div>
          
        <div class="register">
          <div class="r3-register">
            <div >
          <ProgressBar animated class="r3-progress" now={90} />
            </div>
            <div class="r3-account">
              <h1>Create Your Account</h1>
              <p>We need more contact information</p>
              <p>To assist you better in the future</p>
            </div>

              <div class="r3-Phone">
            <Form.Group  controlId="validationCustom11">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="Number"
              placeholder="Enter your Phone Number"
              defaultValue=""
              />
                <Form.Control.Feedback type="invalid">
                  Please Enter your Phone Number.
                </Form.Control.Feedback>
            </Form.Group>
            </div>

              <div class="r3-company">
            <Form.Group  controlId="validationCustom12">
              <Form.Label>Company ID</Form.Label>
              <Form.Control
                required
                type="text"
              placeholder="Enter your Company ID"
              defaultValue=""
              />
                <Form.Control.Feedback type="invalid">
                  Please Enter your Company ID.
                </Form.Control.Feedback>
            </Form.Group>
          </div>


            <div class="r3-btnLink">
                  <Form.Group >
                  <Link to="Login">Already have an account? Sign in here instead.</Link>
                  </Form.Group>
            </div>

            <div class="r3-btn">
              <form action="/registration1" class="back">
               <LinkButton link="registration2" label="Back" variant="outline"></LinkButton>
              </form>
              <form action="/registration3" class="continue">
               <LinkButton link="registration4" label="Continue"></LinkButton>
              </form>
            </div>

          </div>
        </div>
      </div>
    </Form>

  );
}

export default Registration3;