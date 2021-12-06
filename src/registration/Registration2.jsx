import "./registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import setValidated from "react-bootstrap/Form";
import validated from "react-bootstrap/Form";
import React, { useState } from "react";
import LinkButton from "../components/LinkButton";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Registration2(props) {
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
    <div class="register">
      <div class="r2-register">
        <div>
          <ProgressBar animated class="r2-progress" now={50} />
        </div>
        <div class="r2-account">
          <h1>Create Your Account</h1>
          <p className="reg-note">
            We need more contact information to assist you better in the future.
          </p>
        </div>

        <div class="r2-firstname">
          <Form.Group controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
              name="firstName"
                value={props.formData.firstName}
                onChange={props.handleChange}
              
            />
            <Form.Control.Feedback type="invalid">
              Please choose a First Name.
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div class="r2-lastname">
          <Form.Group controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
              name="lastName"
                value={props.formData.lastName}
                onChange={props.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Last Name.
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div class="r2-btnLink">
          <Form.Group className="mb-3">
            <Link to="/login">
              Already have an account? Sign in here instead.
            </Link>
          </Form.Group>
        </div>

        <div class="r2-btn">
          <form action="/registration1" class="back">
            <LinkButton
              link="1"
              label="Back"
              variant="outline"
            ></LinkButton>
          </form>
          <form action="/registration3" class="continue">
            <LinkButton link="3" label="Continue"></LinkButton>
          </form>
        </div>
      </div>
    </div>
  );
}

function BackButton() {
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  return (
    <Button
      variant="primary"
      onClick={() => handleClick("registration1")}
    ></Button>
  );
}

export default Registration2;
