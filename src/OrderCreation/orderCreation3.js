import "./orderCreation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LinkButton from "../components/LinkButton";

function OrderCreation3(props) {
  return (
    <div class="content1">
      <div class="ship-info3">
        <div class="ship-address3">
          <h2>Ship to:</h2>

          <div class="address33">
            <Form.Group className="mb-3" controlId="streetAddress">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                name="shippingStreetAddress"
                value={props.fields.shippingStreetAddress}
                onChange={props.handleChange}
                type="text"
                placeholder="Street Address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Province">
              <Form.Label>Province</Form.Label>
              <Form.Control
              name="shippingProvince"
              value={props.fields.shippingProvince}
              onChange={props.handleChange} type="text" placeholder="Province" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="City">
              <Form.Label>City</Form.Label>
              <Form.Control
              name="shippingCity"
              value={props.fields.shippingCity}
              onChange={props.handleChange} type="text" placeholder="City" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
              name="shippingPostalCode"
              value={props.fields.shippingPostalCode}
              onChange={props.handleChange} type="text" placeholder="Postal Code" />
            </Form.Group>
          </div>

          <h2>Shipping Details:</h2>

          <div class="address3">
            <Form.Group className="mb-3" controlId="customerID">
              <Form.Label>Ship via</Form.Label>
              <Form.Control
              name="shippingVehicle"
              value={props.fields.shippingVehicle}
              onChange={props.handleChange} placeholder="Enter shipping vehicle." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="customerName">
              <Form.Label>Shipping Method</Form.Label>
              <Form.Control
              name="shippingMethod"
              value={props.fields.shippingMethod}
              onChange={props.handleChange} type="text" placeholder="Enter shipping method." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="shippingDate">
              <Form.Label>Shipping Date</Form.Label>
              <Form.Control
              name="shippingDate"
              value={props.fields.shippingDate}
              onChange={props.handleChange} type="date" placeholder="Enter Date" />
            </Form.Group>
          </div>
        </div>

        <div class="ship-contact3">
          <div class="contact3">
            <Form.Group className="mb-3" controlId="personToAlert">
              <Form.Label>Person/Department to Alert</Form.Label>
              <Form.Control
              name="shippingPerson"
              value={props.fields.shippingPerson}
              onChange={props.handleChange} type="text" placeholder="Enter name or department." />
            </Form.Group>
          </div>

          <div class="ship-details3">
            <h2>Shipping Details:</h2>
            <Form.Group className="mb-3" controlId="paymentChoice">
              <Form.Label>Payment Choice</Form.Label>
              <Form.Control
              name="paymentChoice"
              value={props.fields.paymentChoice}
              onChange={props.handleChange} type="text" placeholder="ex. cash" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="deliveryDate">
              <Form.Label>Delivery Date</Form.Label>
              <Form.Control
              name="deliveryDate"
              value={props.fields.deliveryDate}
              onChange={props.handleChange} type="date" placeholder="Enter Date" />
            </Form.Group>
          </div>
        </div>
      </div>

      <form action="/orderCreation4" class="btn3">
      <LinkButton link={`4`} label="Continue"></LinkButton>
      </form>
    </div>
  );
}

export default OrderCreation3;
