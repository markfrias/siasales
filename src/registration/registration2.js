import './registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import setValidated  from 'react-bootstrap/Form';
import validated from 'react-bootstrap/Form';
import React, {useState} from 'react';


function Registration2() {

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
        <div class="image">
            <div class="r2-text">
              <h1>wilbur</h1>
              <p>Sales Information System</p>
            </div>
        </div>

        <div class="r2-register">

          <div >
        <ProgressBar animated class="r2-progress" now={60} />
          </div>
          <div class="r2-account">
            <h1>Create Your Account</h1>
            <p>We need more contact information</p>
            <p>To assist you better in the future</p>
          </div>

            <div class="r2-firstname">
          <Form.Group  controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
             placeholder="First name"
             defaultValue=""
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
             />
                <Form.Control.Feedback type="invalid">
                 Please choose a Last Name.
                </Form.Control.Feedback>
          </Form.Group>
          </div>

            <div class="r2-btnLink" >
                <Form.Group className="mb-3">
                    <Button href="http://localhost:3000/App" variant="link">Already have an Account? Sign-in here instead</Button>
                </Form.Group>
          </div>

          <div class="r2-btn">
            <form action="/registration1" class="back">
              <Button  variant="outline-primary" type="submit">Back</Button>
            </form>
            <form action="/registration3" class="continue">
              <Button  variant="primary" type="submit">Continue</Button>
            </form>
          </div>

        </div>
      </div>
    </Form>

  );
}

export default Registration2;