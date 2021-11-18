import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



function orderCreation4() {
  return (
    <div class="content4">
        <div class="back4">
            <i class="angle left icon"></i>
            <Button variant="link" href="/App">Back to sales Order</Button>
        </div>
        <div class="title4">
            <h1>Create a new sales order</h1>
        </div>

        <div class="nav-row4">
            <a href="/orderCreation1">Customer Information</a>
            <a href="/orderCreation2">Billing</a>
            <a href="/orderCreation3">Shipping</a>

            <a class="pay4">Contents</a>

            <a href="/orderCreation5">Summary</a>
        </div>

        <ProgressBar animated now={80} />

        <div class="item4">
          <h4>Items to Order</h4>
          <div class="item-btn4">
            <Button variant="primary">Add New Item</Button>
          </div>
        </div>

        <div>
          <Table striped bordered hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Toral Price</th>
              <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0123456789</td>
                <td>Toyota PH</td>
                <td>Toyota Carolla 2021 Same</td>
                <td>2</td>
                <td>PhP 50,000</td>
                <td>PhP 100,000</td>
                <i class="ellipsis vertical icon"></i>
              </tr>
              <tr>
                <td>012345678</td>
                <td>Toyota PH</td>
                <td>None</td>
                <td>None</td>
                <td>PhP none</td>
                <td>PhP none</td>
                <i class="ellipsis vertical icon"></i>
              </tr>
              <tr>
                <td>01234567</td>
                <td>Toyota PH</td>
                <td>None</td>
                <td>None</td>
                <td>PhP none</td>
                <td>PhP none</td>
                <i class="ellipsis vertical icon"></i>
              </tr>
              <tr>
                <td>0123456</td>
                <td>Toyota PH</td>
                <td>none</td>
                <td>none</td>
                <td>PhP none</td>
                <td>PhP none</td>
                <i class="ellipsis vertical icon"></i>
              </tr>
            </tbody>
          </Table>
        </div>

        <div class="cont4">

          <div class="cont-left4">
                    <Form.Group className="mb-3" controlId="discount">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control type="number" />          
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="taxRate">
                        <Form.Label>Tax Rate (%)</Form.Label>
                        <Form.Control type="number"/>   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="other">
                        <Form.Label>Other</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shipHandleFee">
                        <Form.Label>Shipping/Handling Fee</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>
          </div>

          <div class="cont-mid4">
              <h4>Subtotal:</h4>
              <h4>Discount:</h4>
              <h4>Subtotal Less Discount:</h4>
              <h4>Total Tax:</h4>
              <h4>Shipping/Handling Fee:</h4>
              <h4>Other:</h4>

              <div class="total4">
                <h4>Total:</h4>
              </div>

          </div>

          <div class="cont-right4">
              <h4>300,000</h4>
              <h4>10,000</h4>
              <h4>10,000</h4>
              <h4>10,000</h4>
              <h4>10,000</h4>
              <h4>10,000</h4>

              <div class="total4">
                <h4>PhP 350,000</h4>
              </div>
          </div>

        </div>
            <form action="/orderCreation5" class="btn4">
                <Button type="submit">Next</Button>
            </form>
      

    </div>  

  );
}

export default orderCreation4;