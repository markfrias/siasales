import "./orderCreation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LinkButton from "../components/LinkButton";
import { useEffect } from "react";

function OrderCreation2(props) {
  useEffect(() => {
    props.handleProgressChange(40)
  }, [])
  return (
    <div class="content1">
      <div class="bill-info2">
        <div class="bill-address2">
          <h2>Bill to:</h2>

          <div class="address2">
            <Form.Group className="mb-3" controlId="customerID">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                name="billingStreetAddress"
                value={props.fields.billingStreetAddress}
                onChange={props.handleChange}
                placeholder="Enter street address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="customerName">
              <Form.Label>Province</Form.Label>
              <Form.Control
                name="billingProvince"
                value={props.fields.billingProvince}
                onChange={props.handleChange}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="customerName">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="billingCity"
                value={props.fields.billingCity}
                onChange={props.handleChange}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="customerName">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                name="billingPostalCode"
                value={props.fields.billingPostalCode}
                onChange={props.handleChange}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>
          </div>
        </div>

        <div class="bill-contact2">
          <div class="contact2">
            <Form.Group className="mb-3" controlId="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                name="billingContactNumber"
                value={props.fields.billingContactNumber}
                onChange={props.handleChange}
                v
                placeholder="Enter contact number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                name="billingEmailAddress"
                value={props.fields.billingEmailAddress}
                onChange={props.handleChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="personToAlert">
              <Form.Label>Person/Department to Alert</Form.Label>
              <Form.Control
                name="billingPerson"
                value={props.fields.billingPerson}
                onChange={props.handleChange}
                type="text"
                placeholder="Enter name or dept."
              />
            </Form.Group>
          </div>
        </div>
      </div>
      <form action="/orderCreation3" class="btn2">
      <LinkButton link={`3`} label="Continue"></LinkButton>
      </form>
    </div>
  );
}

export default OrderCreation2;
