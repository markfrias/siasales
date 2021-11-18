import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function orderCreation3() {
  return (
    <div class="content3">
        <div class="back3">
            <i class="angle left icon"></i>
            <Button variant="link" href="/App">Back to sales Order</Button>
        </div>
        <div class="title3">
            <h1>Create a new sales order</h1>
        </div>

        <div class="nav-row3">
            <a href="/orderCreation1">Customer Information</a>
            <a href="/orderCreation2">Billing</a>

            <a class="ship3">Shipping</a>

            <a href="/orderCreation4">Contents</a>
            <a href="/orderCreation5">Summary</a>
        </div>

        <ProgressBar animated now={60} />

        <div class="ship-info3">
            <div class="ship-address3">

            <h2>Ship to:</h2>

                <div class="address33">
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

                  <h2>Shipping Details:</h2>

                  <div class="address3">
                    <Form.Group className="mb-3" controlId="customerID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="number" placeholder="enter ID" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="customerName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shippingDate">
                      <Form.Label>Shipping Date</Form.Label>
                      <Form.Control type="date" placeholder="enter Date" />
                    </Form.Group>

                  </div>
            </div>

            <div class="ship-contact3">
                        
                <div class="contact3">
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
                
                <div class="ship-details3">
                  <h2>Shipping Details:</h2>
                    <Form.Group className="mb-3" controlId="paymentChoice">
                      <Form.Label>Payment Choice</Form.Label>
                      <Form.Control type="text" placeholder="ex. cash" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="deliveryDate">
                      <Form.Label>Delivery Date</Form.Label>
                      <Form.Control type="date" placeholder="enter Date" />
                    </Form.Group>
                </div>
            </div>

      </div>

            <form action="/orderCreation4" class="btn3">
                <Button type="submit">Next</Button>
            </form>
    </div>  

  );
}

export default orderCreation3;