import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm-6"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="modal-4">
          <div class="modal-left">
            
              <Form.Group className="mb-3" controlId="ItemNo">
                  <Form.Label><h4>Item Number:</h4></Form.Label>
                  <Form.Control type="number" />
              </Form.Group>
              <h4>
                Item Name:
              </h4>
              <a>
                Toyota Corolla 2021
              </a>

              <h4>
                Item Description:
              </h4>
              <a>
                Toyota Corolla 2021 Black Automatic Transmission
              </a>

              <h4>
                Unit Price:
              </h4>
              <a>
                Php. 1,000,000.00
              </a>
            
          </div>

          <div class="modal-right">
            
              <Form.Group className="mb-3" controlId="Quantity">
                  <Form.Label ><h4>Quantity:</h4></Form.Label>
                  <Form.Control type="number" />
              </Form.Group>

              <h4>
                Unit Price:
              </h4>
              <a>
                Php. 1,000,000.00
              </a>
            
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} >Add</Button>
      </Modal.Footer>
    </Modal>

      
  );
}

function OrderCreation4() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div class="content1">
        <div class="item4">
          <h4>Items to Order</h4>
          <div class="item-btn4">
            <Button variant="primary" onClick={() => setModalShow(true)}>Add New Item</Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
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

export default OrderCreation4;