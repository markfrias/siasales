import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



function orderCreation5() {
  return (
    <div class="content5">
        <div class="back5">
            <i class="angle left icon"></i>
            <Button variant="link">Back to sales Order</Button>
        </div>
        <div class="title5">
            <h1>Create a new sales order</h1>
        </div>

        <div class="nav-row5">
            <p >Customer Information</p>
            <p >Billing</p>
            <p >Shipping</p>
            <p >Contents</p>

            <p class="cont5">Summary</p>
        </div>

        <ProgressBar animated now={100} />

        <div class="note5">
            <div class="warning5">
                <i class="info circle icon"></i>
                <>Please review the data below. Go back to the previous steps is there are missing data.</>
            </div>
        </div>

        <div class="date-filing5">
          <h2>Date of Filing: December 2, 2022</h2>
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
                        <h5>Customer ID:</h5>
                        <p>2208752585</p>
                    </div>
                    
                    <div class="left5">
                        <h5>Customer Name:</h5>
                        <p>Toyota Motors Philippines</p>
                    </div>

                    <div class="left5">
                        <h5>Address:</h5>
                        <div class="address-info5">
                            <p>123 Toyota Drive</p>
                            <p>Silang Cavite 4118</p>
                            <p>Philippines</p>
                        </div>
                    </div>
                </div>

                <div class="details-right5">
                    <div class="right5">
                        <h5>Contact Number:</h5>
                        <p>09273344806</p>
                    </div>

                    <div class="right5">
                        <h5>Email Adress:</h5>
                        <p>customer@toyota.ph</p>
                    </div>

                    <div class="right5">
                        <h5>Point of Contact:</h5>
                        <p>Demi Andres</p>
                    </div>
                </div>
            </div>

            <div class="info-right5">
                <div class="details-left5">
                    <div class="left5">
                        <h5>Billing Address:</h5>
                        <div class="address-info5">
                            <p>123 Toyota Drive</p>
                            <p>Silang Cavite 4118</p>
                            <p>Philippines</p>
                        </div>
                    </div>

                    <div class="right5">
                        <h5>Contact Number:</h5>
                        <p>09778524444</p>
                    </div>
                </div>

                <div class="details-right5">
                    <div class="right5">
                        <h5>Email Adress:</h5>
                        <p>customer@toyota.ph</p>
                    </div>

                    <div class="right5">
                        <h5>Person/Department to Alert:</h5>
                        <p>Ferby Reyes</p>
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
                            <p>123 Toyota Drive</p>
                            <p>Silang Cavite 4118</p>
                            <p>Philippines</p>
                        </div>
                    </div>

                    <div class="left5">
                        <h5>Contact Number:</h5>
                        <p>09273344806</p>
                    </div>

                    <div class="left5">
                        <h5>Email Adress:</h5>
                        <p>customer@toyota.ph</p>
                    </div>

                    <div class="left5">
                        <h5>Person/Department to Alert:</h5>
                        <p>Ferby Reyes</p>
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

            <div class="btn5">
                <Button type="submit">Submit</Button>
            </div>

    </div>  

  );
}

export default orderCreation5;