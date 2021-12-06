import React, { useEffect, useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import "./orderCreation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import OrderCreation1 from "./OrderCreation1";
import { Switch, Route } from "react-router-dom";
import OrderCreation2 from "./OrderCreation2";
import OrderCreation3 from "./OrderCreation3";
import OrderCreation4 from "./OrderCreation4";
import OrderCreation5 from "./OrderCreation5";
const OrderCreation = () => {
  let { path, url } = useRouteMatch();
  const initialState = {
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
    tableItems: [],
    orderDetails: {
      discount: 0,
      taxRate: 10,
      shippingFee: 0,
      otherFees: 0,
    },
  };




  const [form, setForm] = useState(initialState);

  const initialCalculations = {
    subtotal: 0,
    subtotalLessDiscount: 0,
    totalTax: 0,
    total: 0,
  };
  const [calculations, setCalculations] = useState(initialCalculations);
  const [progress, setProgress] = useState(20);

  // Handle sales order submission
  async function handleOrderSubmission() {
    let order;
    await submitOrder()
    .then(data =>  order = data)
    return order;
  }


  // Handles POST request to submit sales order to server
async function submitOrder() {
  const response = await fetch("https://wilbur-server.herokuapp.com/salesorder",{
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  } );
  return response.json();
}



  // Changes value of fields and the state based on changes in the field
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }



  // Logs subtotal every time calculations is updated
  useEffect(() => {
    console.log(calculations.subtotal);
  }, [calculations]);

  useEffect(() => {
    console.log(form)
  }, [form]);

  // Update calculations everytime order details form is edited
  useEffect(() => {
    
  }, [form.orderDetails]);

  useEffect(() => {
    if (form.tableItems.length > 0) {
      setCalculations({
        ...calculations,
        subtotal: form.tableItems.reduce((previous, current) => {
          return previous + current.quantity * current.unitPrice;
        },
         0),
        subtotalLessDiscount: calculations.subtotal - form.orderDetails.discount,
        totalTax: calculations.subtotalLessDiscount * (form.orderDetails.taxRate / 100),
        total: calculations.subtotalLessDiscount + calculations.totalTax + form.orderDetails.shippingFee + form.orderDetails.otherFees
      });

      form.tableItems.forEach((element) => {
        console.log(element.quantity);
      });

      const luh = form.tableItems.reduce((previousValue, currentValue) => {
        console.log(previousValue, currentValue.quantity);
        return previousValue + currentValue.quantity;
      }, 0);
      console.log(luh);

      const hul = [{ quantity: 1 }, { quantity: 32 }, { quantity: 33 }];
      const hula = hul.reduce(
        (previous, current) => previous.quantity + current.quantity
      );
      console.log(hula);
    }
  }, [form.tableItems]);
  // Changes value of fields in the order details and state and calculates the fees
  function handleCalc(event) {
    const target = event.target;
    setForm({
      ...form,
      orderDetails: { ...form.orderDetails, [target.name]: isNaN(parseFloat(target.value)) ? 0 : parseFloat(target.value) },
    });
    
  }

  function handleTableEntry(itemData) {
    setForm({ ...form, tableItems: [...form.tableItems, itemData] });
  }

  function handleProgressChange(progressChange) {
    setProgress(progressChange)
  }

  return (
    <div class="oc-container">
      <div class="content1">
        <div class="back1">
          <i class="angle left icon"></i>
          <Link to="/order-creation/1">
            Back to Sales Order
          </Link>
        </div>
        <div class="title1">
          <h1>Create a new sales order</h1>
        </div>
        <div class="nav-row1">
          <NavLink to={`${url}/1`} activeClassName="nav-row-active">
            Customer Information
          </NavLink>
          <NavLink to={`${url}/2`} activeClassName="nav-row-active">
            Billing
          </NavLink>
          <NavLink to={`${url}/3`} activeClassName="nav-row-active">
            Shipping
          </NavLink>
          <NavLink to={`${url}/4`} activeClassName="nav-row-active">
            Contents
          </NavLink>
          <NavLink to={`${url}/5`} activeClassName="nav-row-active">
            Summary
          </NavLink>
        </div>

        <ProgressBar animated now={progress} />
      </div>

      <Switch>
        {console.log(path)}
        <Route exact path="/order-creation/1">
          <OrderCreation1 fields={form} handleChange={handleChange} handleProgressChange={() => handleProgressChange(20)} />
        </Route>

        <Route path={`${path}/2`}>
          <OrderCreation2 fields={form} handleChange={handleChange} handleProgressChange={() => handleProgressChange(40)} />
        </Route>

        <Route path={`${path}/3`}>
          <OrderCreation3 fields={form} handleChange={handleChange} handleProgressChange={() => handleProgressChange(60)} />
        </Route>

        <Route path={`${path}/4`}>
          <OrderCreation4
            fields={form}
            handleChange={handleChange}
            handleCalc={handleCalc}
            handleTableEntry={handleTableEntry}
            calc={calculations}
            handleProgressChange={() => handleProgressChange(80)}
          />
        </Route>

        <Route path={`${path}/5`}>
          <OrderCreation5 fields={form} handleChange={handleChange} calc={calculations} handleProgressChange={() => handleProgressChange(100)} handleOrderSubmission={handleOrderSubmission} />
        </Route>
      </Switch>
    </div>
  );
};

export default OrderCreation;
