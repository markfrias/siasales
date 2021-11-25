import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
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
                  <Form.Control name="itemNumber" value={props.item.itemNumber} onChange={props.handleChange}  />
              </Form.Group>
              <h4>
                Item Name:
              </h4>
              <p>
                {parseFloat(props.item.itemName)}
              </p>

              <h4>
                Item Description:
              </h4>
              <p>
                {props.item.itemDescription}
              </p>

              <h4>
                Unit Price:
              </h4>
              <p>
                {props.item.unitPrice}
              </p>
            
          </div>

          <div class="modal-right">
            
              <Form.Group className="mb-3" controlId="Quantity">
                  <Form.Label ><h4>Quantity:</h4></Form.Label>
                  <Form.Control
                  name="quantity" value={props.item.quantity} onChange={props.handleChange} type="number" />
              </Form.Group>

              <h4>
                Unit Price:
              </h4>
              <p>
                {props.item.unitPrice}
              </p>
            
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onAdd} >Add</Button>
      </Modal.Footer>
    </Modal>

      
  );
}

function OrderCreation4(props) {
  const initNewItem = {
    itemNumber: "2233444",
    itemName: "Toyota Corolla 2019",
    itemDescription: "Manual transmission Toyota Coralla Altis 2019",
    quantity: "1",
    unitPrice: 900000 ,
  }

  
  function handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    setNewItem({...newItem, [event.target.name]: event.target.value})
    
}
function handleAddBtnClick() {
  props.handleTableEntry(newItem)
  console.log(newItem)
  console.log(parseFloat(newItem.unitPrice))
}


  const [modalShow, setModalShow] = React.useState(false);
  const [newItem, setNewItem] = useState(initNewItem);
  return (
    <div class="content1">
        <div class="item4">
          <h4>Items to Order</h4>
          <div class="item-btn4">
            <Button variant="primary" onClick={() => setModalShow(true)}>Add New Item</Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => {setModalShow(false)
                    }}
                    onAdd={() => {
                      setModalShow(false);
                      handleAddBtnClick();
                    }}
                    item={newItem}
                    handleBtnClick={() => handleAddBtnClick}
                    handleChange={handleChange}
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
            
              {props.fields.tableItems.map(item => (
                <tbody key={item.itemId}>
                <tr>
                <td>{item.itemNumber}</td>
                <td>{item.itemName}</td>
                <td>{item.itemDescription}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.quantity * parseFloat(item.unitPrice)}</td>
                <i class="ellipsis vertical icon"></i>
              </tr>
              </tbody>

              ))}
              
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