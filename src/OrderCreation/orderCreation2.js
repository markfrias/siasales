import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function orderCreation2() {
  return (
    <div class="content2">
        <div class="back2">
            <i class="angle left icon"></i>
            <Button variant="link">Back to sales Order</Button>
        </div>
        <div class="title2">
            <h1>Create a new sales order</h1>
        </div>

        <div class="nav-row2">
            <p >Customer Information</p>
                    
            <p class="bill2">Billing</p>

            <p>Shipping</p>
            <p>Payment</p>
            <p>Contents</p>
        </div>

        <ProgressBar animated now={40} />

        <div class="bill-info2">
            <div class="bill-address2">

                <h2>Bill to:</h2>

                <div class="address2">
                    <Form.Group className="mb-3" controlId="customerID">
                      <Form.Label>ID</Form.Label>
                      <Form.Control type="number" placeholder="enter ID" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="customerName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="enter Name" />
                    </Form.Group>
                </div>

                <div class="address22">
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

            <div class="bill-contact2">
                        
                <div class="contact2">
                      <Form.Group className="mb-3" controlId="contactNumber">
                          <Form.Label>Contact Number</Form.Label>
                          <Form.Control type="number" placeholder="enter Contact Number" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="personToAlert">
                          <Form.Label>Person/Dept. to alert</Form.Label>
                          <Form.Control type="text" placeholder="enter name or dept." />
                      </Form.Group>

                </div>
              </div>

        </div>
            <div class="btn2">
                <Button type="submit">Next</Button>
            </div>
    </div>  

  );
}

export default orderCreation2;