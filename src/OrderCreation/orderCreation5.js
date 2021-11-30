import "./orderCreation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React from "react";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <Modal
      {...props}
      size="sm-4"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submitting Sales Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="submit-order">
          <p>Some item/s ordered are no longer in stock.</p>
          <p>Are you sure you want to submit this sales order?</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={() => setModalShow2(true)}>Submit</Button>
      </Modal.Footer>
      <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="sm-4"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submitting Sales Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="submit-success">
          <div class="success">
            <i class="check circle icon" text-align="center"></i>
            <p>The order has succesfully been added</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button href="/orderProcessing">Go to Order</Button>
      </Modal.Footer>
    </Modal>
  );
}

function OrderCreation5(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const filler = "Fill this field up.";

  return (
    <div class="content1">
      <div class="note5">
        <div class="warning5">
          <i class="info circle icon"></i>
          <>
            Please review the data below. Go back to the previous steps if there
            are missing data.
          </>
        </div>
      </div>

      <div class="date-filing5">
        <h2>{`Date of Filing: ${new Date().toDateString()}`}</h2>
      </div>

      <div class="cust-info5">
        <div class="customer5">
          <h1>Customer Information</h1>
        </div>
        <div class="billing5">
          <h1>Billing Information</h1>
        </div>
      </div>

      <div class="cust-details5">
        <div class="info-left5">
          <div class="details-left5">
            <div class="left5">
              <h5>Customer Name:</h5>
              <p>
                {props.fields.customerName == ""
                  ? filler
                  : props.fields.customerName}
              </p>
            </div>

            <div class="left5">
              <h5>Address:</h5>
              <div class="address-info5">
                <p>{props.fields.streetAddress == ""
                  ? filler
                  : props.fields.streetAddress}</p>
                <p>{(props.fields.city == ""
                  ? filler
                  : `${props.fields.city} ${props.fields.province} ${props.fields.postalCode}`) }</p>
                <p>Philippines</p>
              </div>
            </div>
          </div>

          <div class="details-right5">
            <div class="right5">
              <h5>Contact Number:</h5>
              <p>{props.fields.contactNumber == ""
                  ? filler
                  : props.fields.contactNumber}</p>
            </div>

            <div class="right5">
              <h5>Email Address:</h5>
              <p>{props.fields.email == ""
                  ? filler
                  : props.fields.email}</p>
            </div>

            <div class="right5">
              <h5>Point of Contact:</h5>
              <p>{props.fields.pointOfContact == ""
                  ? filler
                  : props.fields.pointOfContact}</p>
            </div>
          </div>
        </div>

        <div class="info-right5">
          <div class="details-left5">
            <div class="left5">
              <h5>Billing Address:</h5>
              <div class="address-info5">
                <p>{props.fields.billingStreetAddress == ""
                  ? filler
                  : props.fields.billingStreetAddress}</p>
                <p>{(props.fields.billingCity == ""
                  ? filler
                  : `${props.fields.billingCity} ${props.fields.billingProvince} ${props.fields.billingPostalCode}`) }</p>
                <p>Philippines</p>
              </div>
            </div>
          </div>

          <div class="details-right5">
            <div class="right5">
              <h5>Person/Department to Alert:</h5>
              <p>{props.fields.billingPerson == ""
                  ? filler
                  : props.fields.billingPerson}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cust-info5">
        <div class="customer5">
          <h1>Shipping Information</h1>
        </div>
      </div>

      <div class="cust-details5">
        <div class="info-left5">
          <div class="details-left5">
            <div class="left5">
              <h5>Address:</h5>
              <div class="address-info5">
                <p>{props.fields.shippingStreetAddress == ""
                  ? filler
                  : props.fields.shippingStreetAddress}</p>
                <p>{(props.fields.shippingCity == ""
                  ? filler
                  : `${props.fields.shippingCity} ${props.fields.shippingProvince} ${props.fields.shippingPostalCode}`) }</p>
                <p>Philippines</p>
              </div>
            </div>

            <div class="left5">
              <h5>Contact Number:</h5>
              <p>{props.fields.shippingContactNumber == ""
                  ? filler
                  : props.fields.shippingContactNumber}</p>
            </div>

            <div class="left5">
              <h5>Person/Department to Alert:</h5>
              <p>{props.fields.shippingPerson == ""
                  ? filler
                  : props.fields.shippingPerson}</p>
            </div>
          </div>

          <div class="details-right5">
            <div class="right5">
              <h5>Ship via:</h5>
              <p>FedEx</p>
            </div>

            <div class="right5">
              <h5>Shipping Method:</h5>
              <p>FedEx</p>
            </div>

            <div class="right5">
              <h5>Payment Choice:</h5>
              <p>Cash</p>
            </div>

            <div class="right5">
              <h5>Delivery Date:</h5>
              <p>January 15, 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cust-info5">
        <div class="customer5">
          <h1>Order Details</h1>
        </div>
      </div>

      <div class="order5">
        <div class="order-table5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item ID:</th>
                <th>Item Name:</th>
                <th>Quantity:</th>
                <th>Total Price:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0123456789</td>
                <td>Toyota Philippines</td>
                <td>2</td>
                <td>Php 150,000</td>
              </tr>
              <tr>
                <td>012345678</td>
                <td>Toyota Philippines</td>
                <td>55</td>
                <td>Php 150,000</td>
              </tr>
              <tr>
                <td>01234567</td>
                <td>Toyota Philippines</td>
                <td>777</td>
                <td>Php 0</td>
              </tr>
              <tr>
                <td>012345678</td>
                <td>Toyota Philippines</td>
                <td>251</td>
                <td>Php 50,000</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div class="order-number5">
          <div class="cont-mid5">
            <h4>Subtotal:</h4>
            <h4>Discount:</h4>
            <h4>Subtotal Less Discount:</h4>
            <h4>Total Tax:</h4>
            <h4>Shipping/Handling Fee:</h4>
            <h4>Other:</h4>

            <div class="total5">
              <h4>Total:</h4>
            </div>
          </div>

          <div class="cont-right5">
            <h4>300,000</h4>
            <h4>10,000</h4>
            <h4>10,000</h4>
            <h4>10,000</h4>
            <h4>10,000</h4>
            <h4>10,000</h4>

            <div class="total5">
              <h4>PhP 350,000</h4>
            </div>
          </div>
        </div>
      </div>

      <form class="btn5">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Submit
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
      </form>
    </div>
  );
}

export default OrderCreation5;
