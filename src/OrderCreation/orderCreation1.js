import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';






function OrderCreation1(props) {
    

    return (
        <div class="content1">
                <div class="note1">
                    <div class="warning1">
                        <i class="info circle icon"></i>
                        <>You can laways go back to the previous by clicking the labels above (e.g., Billing)</>
                    </div>
                </div>

                <div class="order-info1">
                    <div class="order-address1">

                        <h2>Customer's Address</h2>

                        <Form>
                            {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Existing Customer`}
                                />
                            </div>
                            ))}

                            {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label={`New Customer`}
                                />
                            </div>
                            ))}
                        </Form>

                        <div class="address1">
                                <p>{props.fields.customerId}</p>
                                <p>{props.fields.customerName}</p>
                                <Form.Group className="mb-3" controlId="customerID">
                                    <Form.Label>Customer ID</Form.Label>
                                    <Form.Control placeholder="Enter Customer ID" name="customerId" value={props.fields.name} onChange={props.handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="customerName">
                                    <Form.Label>Customer Name</Form.Label>
                                    <Form.Control name="customerName" value={props.fields.customerName} onChange={props.handleChange} type="text" placeholder=" Enter Customer Name" />
                                </Form.Group>
                        </div>

                            <div class="address11">
                                <Form.Group className="mb-3" controlId="streetAddress">
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control type="text" placeholder="Street Address" />
                                    
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Province">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control type="text" placeholder="Province" />
                                    
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="City">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" />
                                    
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="postalCode">
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control type="text" placeholder="Postal Code" />
                                    
                                </Form.Group>
                            </div>
                    </div>

                    <div class="order-contact1">
                        <h2>Customer Contact Information</h2>

                        <div class="contact1">
                                <Form.Group className="mb-3" controlId="contactNumber">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Contact Number" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="pointOfContact">
                                    <Form.Label>Point of Contact</Form.Label>
                                    <Form.Control type="text" placeholder=" Point of Contact" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="dateOfSubmission">
                                    <Form.Label>Date of Submission</Form.Label>
                                    <Form.Control type="date" placeholder=" Date of Submission" />
                                </Form.Group>
                        </div>
                    </div>

                </div>

                
                    <form action="/orderCreation2" class="btn1">
                        <Button type="submit" >Next</Button>
                    </form>

        </div>

    
    
  );
}

export default OrderCreation1;