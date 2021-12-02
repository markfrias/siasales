import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LinkButton from '../components/LinkButton';

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
                  <Form.Control name="itemId" value={props.item.itemId} onChange={props.handleChange}  />
              </Form.Group>
              <h4>
                Item Name:
              </h4>
              <p>
                {props.item.itemName}
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
  useEffect(() => {
    props.handleProgressChange(80)
  }, [])
  const initNewItem = {
    itemId: "2233444",
    itemName: "Toyota Corolla 2019",
    itemDescription: "Manual transmission Toyota Coralla Altis 2019",
    quantity: "",
    unitPrice: 900000 ,
  }

  
  function handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;
    console.log(target.value)
    setNewItem({...newItem, 

      [event.target.name]: event.target.name == "quantity" ?
      parseInt(target.value) :
      target.value
      })
    
}


function handleAddBtnClick() {
  props.handleTableEntry(newItem)
  console.log(newItem)
  console.log(parseFloat(newItem.unitPrice))
}
let internationalNumberFormat = new Intl.NumberFormat('en-US')


  const [modalShow, setModalShow] = React.useState(false);
  //const [calculations, setCalculations] = useState()
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
              
              <tbody>
              {props.fields.tableItems.length > 0 ?
                props.fields.tableItems.map(item => (
                  <tr key={item.itemId}>
                  <td>{item.itemId}</td>
                  <td>{item.itemName}</td>
                  <td>{item.itemDescription}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.quantity * parseFloat(item.unitPrice)}</td>
                  <i class="ellipsis vertical icon"></i>
                </tr>
                ))
            :
            
              <td>Please add an item by clicking the "Add New Item" button above.</td>
            
            
            }
            </tbody>
              
              
          </Table>
        </div>

        <div class="cont4">

          <div class="cont-left4">
                    <Form.Group className="mb-3" controlId="discount">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control name="discount" value={props.fields.orderDetails.discount} onChange={props.handleCalc} type="number" />          
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="taxRate">
                        <Form.Label>Tax Rate (%)</Form.Label>
                        <Form.Control name="taxRate" value={props.fields.orderDetails.taxRate} onChange={props.handleCalc} type="number"/>   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="other">
                        <Form.Label>Other</Form.Label>
                        <Form.Control name="otherFees" value={props.fields.orderDetails.otherFees} onChange={props.handleCalc} type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shipHandleFee">
                        <Form.Label>Shipping/Handling Fee</Form.Label>
                        <Form.Control name="shippingFee" value={props.fields.orderDetails.shippingFee} onChange={props.handleCalc} type="number"/>
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
              <h4>{internationalNumberFormat.format(props.calc.subtotal)}</h4>
              <h4>{props.fields.orderDetails.discount !== ""
                ? internationalNumberFormat.format(parseFloat(props.fields.orderDetails.discount))
                : 0
              }</h4>
              <h4>{internationalNumberFormat.format(props.calc.subtotal - props.fields.orderDetails.discount)}</h4>
              <h4>{internationalNumberFormat.format(props.fields.orderDetails.taxRate / 100 * (props.calc.subtotal - props.fields.orderDetails.discount))}</h4>
              <h4>{props.fields.orderDetails.shippingFee !== ""
                ? internationalNumberFormat.format(parseFloat(props.fields.orderDetails.shippingFee))
                : 0}</h4>
              <h4>{props.fields.orderDetails.otherFees !== ""
                ? internationalNumberFormat.format(parseFloat(props.fields.orderDetails.otherFees))
                : 0}</h4>

              <div class="total4">
                <h4>{internationalNumberFormat.format((props.calc.subtotal - props.fields.orderDetails.discount) + (props.fields.orderDetails.taxRate / 100 * (props.calc.subtotal - props.fields.orderDetails.discount) + props.fields.orderDetails.shippingFee + props.fields.orderDetails.otherFees)) }</h4>
              </div>
          </div>

        </div>
            <form action="/orderCreation5" class="btn4">
            <LinkButton link={`5`} label="Continue"></LinkButton>

            </form>
      

    </div>  

  );
}

export default OrderCreation4;