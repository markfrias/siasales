import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/Form';
import setValidated  from 'react-bootstrap/Form';
import validated from 'react-bootstrap/Form';
import React, {useState} from 'react';



function Registration1() {

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

      <div class="row">
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

        <div class="register">
          <div class="r1-register">
            <div >
              <ProgressBar animated class="r1-progress" now={30} />
            </div>
            <div class="r1-account">
              <h1>Create Your Account</h1>
              <Button href="http://localhost:3000/App" variant="link">Already have an Account? Sign-in here instead</Button>
            </div>

          <div class="r1-username">
            <Form.Group  controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
              </InputGroup>
              </Form.Group>
          </div>

          <div class="r1-password">
          <Form.Group  controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          </div>
          
              <div class="r1-checkbox">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            </div>

                <form action="/registration2" class="r1-btn">
                  <Button type="submit">Continue</Button>
                </form>
        
            
          </div>
        </div>
      </div>
    </Form>

  );
}

export default Registration1;