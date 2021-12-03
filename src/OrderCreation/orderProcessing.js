import "./orderCreation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Redirect, useParams } from "react-router";
import { Spinner } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm-4"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Changing Order Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are You sure you want to change order status to {props.processStatus} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.handleChangeStatus}>Change</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="sm-4"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Changing Order Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are You sure you want to change order status</p>
        <p>to Rejected?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button href="/orderRejected">Change</Button>
      </Modal.Footer>
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
          Changing Order Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are You sure you want to change order status</p>
        <p>to Drafting?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button href="/orderDrafting">Change</Button>
      </Modal.Footer>
    </Modal>
  );
}

function OrderProcessing() {
  const initialState = {
    obj: {
      customerId: "0000001",
    person: "",
    customerName: "",
    streetAddress: "",
    salesPersonId: "0000001",
    customerRepresentativeId: "0000001",
    province: "",
    city: "",
    postalCode: "",
    contactNumber: "",
    email: "",
    pointOfContact: "",
    submissionDate: "",
    shippingDetails: {
      billingStreetAddress: "",
      billingProvince: "",
      billingCity: "",
      billingPostalCode: "",
      billingEmailAddress: "",
      billingContactNumber: "",
      billingPerson: "",
      billingStreetAddress: "",
      shippingProvince: "",
      shippingCity: "",
      shippingPostalCode: "",
      shippingEmailAddress: "",
      shippingContactNumber: "",
      shippingPerson: "",
      shippingMethod: "",
      shippingVehicle: "",
      shippingDate: "",
      deliveryDate: "",
      paymentChoice: "",
    },
    tableItems: [],
    orderDetails: {
      discount: 0,
      taxRate: 10,
      shippingFee: 0,
      otherFees: 0,
    },
    calculations: {
      subtotal: 0,
      subtotalLessDiscount: 0,
      totalTax: 0,
      total: 0
    }
    }
    
  };
  const [auth, setAuth] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [loaded, setLoaded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("None")
  const [processingDropdown, setProcessingDropdown] = useState("Completed")
  const [orderData, setOrderData] = useState(initialState);
  const { id } = useParams();

// Change the status of the order
async function changeStatus(status) {
  const response = await fetch(`/salesorder/updateProcessing?id=${orderData.obj._id}&processingStatus=${status}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  response.json().then(data => {
    if (data.status == "Success") {
      setSubmitStatus("Success");

    } else {
      setSubmitStatus("Error")
    }
  })
}

  // Fetch individual sales order
  async function getUser() {
    const response = await fetch(`/salesorder/s?id=${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }

  // Close modal if submit is succcess and then update status in frontend
  useEffect(() => {
    setModalShow(false);
    // Add code to reload
  }, [submitStatus])
  useEffect(() => {
    console.log(id);

    getUser().then((data) => {
      setOrderData(data);
      setAuth(data.status);
      console.log(data.obj)
    });
  }, []);

  if (auth == "Unauthorized") {
    return (<Redirect to="/login" />);
  } else if (auth == "User does not exist") {
    return (<h1>Sales order does not exist.</h1>)
  } else if (auth == "Success") {
    return (
      <div className="content5">
        <div className="back5">
          <i className="angle left icon"></i>
          <Button variant="link" href="/App">
            Back to sales Order
          </Button>
        </div>
        <div className="title-status">
          <h1>View Sales Order</h1>
        </div>

        <div className="status-dropdown">
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Status: {orderData.obj.processingStatus}</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {setModalShow(true); setProcessingDropdown("Processing")}}>Processing</Dropdown.Item>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleChangeStatus={()=> (changeStatus(processingDropdown))}
                processStatus={processingDropdown}
              />

<Dropdown.Item onClick={() => {setModalShow(true); setProcessingDropdown("Completed")}}>
                Completed
              </Dropdown.Item>
              

              <Dropdown.Item onClick={() => {setModalShow(true); setProcessingDropdown("Rejected")}}>
                Rejected
              </Dropdown.Item>
              <MyVerticallyCenteredModal1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                changeStatus={() => changeStatus("Rejected")}
              />

<Dropdown.Item onClick={() => {setModalShow(true); setProcessingDropdown("Drafted")}}>
                Drafting
              </Dropdown.Item>
              <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                changeStatus={() => changeStatus("Drafted")}
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="date-filing5">
          <h2>Date of Filing: {orderData.obj.createdAt}</h2>
          <h2>Order No.: {id}</h2>
        </div>

        <div className="cust-info5">
          <div className="customer5">
            <h1>Customer Information</h1>
          </div>
          <div className="billing5">
            <h1>Billing Information</h1>
          </div>
        </div>

        <div className="cust-details5">
          <div className="info-left5">
            <div className="details-left5">
              <div className="left5">
                <h5>Customer ID:</h5>
                <p>2208752585</p>
              </div>

              <div className="left5">
                <h5>Customer Name:</h5>
                <p>Wilbur InfoTech Corporation (orders in behalf of customers)</p>
              </div>
            </div>
            {/*
            <div className="details-right5">
              <div className="right5">
                <h5>Contact Number:</h5>
                <p>09273344806</p>
              </div>

              <div className="right5">
                <h5>Email Adress:</h5>
                <p>customer@toyota.ph</p>
              </div>

              <div className="right5">
                <h5>Point of Contact:</h5>
                <p>Demi Andres</p>
              </div>
            </div> */}
          </div>

          <div className="info-right5">
            <div className="details-left5">
              <div className="left5">
                <h5>Billing Address:</h5>
                <div className="address-info5">
                  <p>{orderData.obj.shippingDetails.billingStreetAddress}</p>
                  <p>{`${orderData.obj.shippingDetails.billingCity} ${orderData.obj.shippingDetails.billingProvince}` }</p>
                  <p>Philippines</p>
                </div>
              </div>

              {/*<div className="right5">
                <h5>Contact Number:</h5>
                <p>09778524444</p>
          </div> */}
            </div>

            {/*<div className="details-right5">
              <div className="right5">
                <h5>Email Adress:</h5>
                <p>customer@toyota.ph</p>
              </div>

              <div className="right5">
                <h5>Person/Department to Alert:</h5>
                <p>Ferby Reyes</p>
              </div>
        </div>*/}
          </div>
        </div>

        <div className="cust-info5">
          <div className="customer5">
            <h1>Shipping Information</h1>
          </div>
        </div>

        <div className="cust-details5">
          <div className="info-left5">
            <div className="details-left5">
              <div className="left5">
                <h5>Address:</h5>
                <div className="address-info5">
                  <p>{orderData.obj.shippingDetails.shippingStreetAddress}</p>
                  <p>{`${orderData.obj.shippingDetails.shippingCity} ${orderData.obj.shippingDetails.shippingProvince}`}</p>
                  <p>Philippines</p>
                </div>
              </div>

              {/*<div className="left5">
                <h5>Contact Number:</h5>
                <p>09273344806</p>
              </div>

              <div className="left5">
                <h5>Email Adress:</h5>
                <p>customer@toyota.ph</p>
              </div>

              <div className="left5">
                <h5>Person/Department to Alert:</h5>
                <p>Ferby Reyes</p>
      </div>*/}
      <div className="left5">
                <h5>Ship via:</h5>
                <p>{orderData.obj.shippingDetails.shippingVehicle}</p>
              </div>
            </div>

            <div className="details-right5">
              

              <div className="right5">
                <h5>Shipping Method:</h5>
                <p>{orderData.obj.shippingDetails.shippingMethod}</p>
              </div>

              <div className="right5">
                <h5>Payment Choice:</h5>
                <p>{orderData.obj.shippingDetails.paymentChoice}</p>
              </div>

              <div className="right5">
                <h5>Delivery Date:</h5>
                <p>{orderData.obj.shippingDetails.deliveryDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cust-info5">
          <div className="customer5">
            <h1>Order Details</h1>
          </div>
        </div>

        <div className="order5">
          <div className="order-table5">
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
                {orderData.obj.items.map((item, index) => (
                  <tr key={index}>
                  <td>{item.itemId}</td>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.unitPrice}</td>
                </tr>
                ))}
                
              </tbody>
            </Table>
          </div>

          {/* Code this later */}
          {/*
          <div className="order-number5">
            <div className="cont-mid5">
              <h4>Subtotal:</h4>
              <h4>Discount:</h4>
              <h4>Subtotal Less Discount:</h4>
              <h4>Total Tax:</h4>
              <h4>Shipping/Handling Fee:</h4>
              <h4>Other:</h4>

              <div className="total5">
                <h4>Total:</h4>
              </div>
            </div>

            
            {/* <div className="cont-right5">
              <h4>{orderData.obj.items.reduce((prev, current) => (
                prev + (current.quantity * current.unitPrice)
              ), 0)}</h4>
              <h4>{orderData.obj.orderDetails.discount}</h4>
              <h4>0</h4>
              <h4>10,000</h4>
              <h4>10,000</h4>
              <h4>10,000</h4>

              <div className="total5">
                <h4>PhP 350,000</h4>
              </div>
              

            </div>
          </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="content5">
        <div className="back5">
          <i className="angle left icon"></i>
          <Button variant="link" href="/App">
            Back to sales Order
          </Button>
        </div>
        <div className="title-status">
          <h1>View Sales Order</h1>
          <Spinner className="justify-content-center" animation="grow" variant="primary" />
        </div>
      </div>
    );
  }
}


export default OrderProcessing;
