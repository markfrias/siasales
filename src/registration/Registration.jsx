import "./registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import InputGroup from "react-bootstrap/Form";
import setValidated from "react-bootstrap/Form";
import validated from "react-bootstrap/Form";
import LinkButton from "../components/LinkButton";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Registration1 from "./Registration1";
import Registration2 from "./Registration2";
import Registration3 from "./Registration3";
import Registration4 from "./Registration4";

function Registration() {
  let { path, url } = useRouteMatch();
  const initialState = {
    userName: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyId: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle sales order submission
  async function handleOrderSubmission() {
    let order;
    await submitOrder().then((data) => (order = data));
    return order;
  }

  // Handles POST request to submit sales order to server
  async function submitOrder() {
    const response = await fetch("/users/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return response.json();
  }

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
        <div class="image"></div>
      </div>

      <Switch>
        <Route path={`${path}/1`}>
          <Registration1
            formData={formData}
            handleChange={handleChange}
          ></Registration1>
        </Route>
        <Route path={`${path}/2`}>
          <Registration2
            formData={formData}
            handleChange={handleChange}
          ></Registration2>
        </Route>
        <Route path={`${path}/3`}>
          <Registration3
            formData={formData}
            handleChange={handleChange}
            handleOrderSubmission={handleOrderSubmission}

          ></Registration3>
        </Route>
        <Route path={`${path}/4`}>
          <Registration4
            formData={formData}
            handleChange={handleChange}
          ></Registration4>
        </Route>
      </Switch>
    </div>
  );
}

export default Registration;
