import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



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
            <p >Payment</p>

            <p class="cont5">Contents</p>
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
          <h1>Customer Information</h1>
        </div>

        <div class="cust-details5">
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

    </div>  

  );
}

export default orderCreation5;