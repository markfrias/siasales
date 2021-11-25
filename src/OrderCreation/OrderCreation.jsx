import React, { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import './orderCreation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { NavLink, useRouteMatch } from 'react-router-dom';
import OrderCreation1 from './OrderCreation1';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import orderCreation2 from './OrderCreation2';
import OrderCreation2 from './OrderCreation2';
import OrderCreation3 from './OrderCreation3';
import OrderCreation4 from './OrderCreation4';
import OrderCreation5 from './OrderCreation5';

const OrderCreation = () => {

    let { path, url } = useRouteMatch();
    const initialDate = new Date()
    const initialState = {
        customerId: "",
        person: "", 
        customerName: "",
        streetAddress: "",
        province: "",
        city: "",
        postalCode: "",
        contactNumber: "",
        email: "",
        pointOfContact: "",
        submissionDate: "",
        billingStreetAddress: "",
        billingProvince: "",
        billingCity: "",
        billingPostalCode: "",
        billingEmailAddress: "",
        billingContactNumber: "",
        billingPerson: "",
        tableItems: [],
        orderDetails: {
            discount: 0,
            taxRate: 10,
            shippingFee: 0,
            otherFees: 0
        }





    }
    const [form, setForm] = useState(initialState)
    
    // Changes value of fields and the state based on changes in the field
    function handleChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        setForm({...form, [event.target.name]: event.target.value})
    }

    // Changes value of fields in the order details and state and calculates the fees
    function handleCalc(event) {
        const target = event.target;
        setForm({...form, orderDetails: {...form.orderDetails, [target.name]: target.value}})
    }

    function handleTableEntry(itemData) {
        console.log(form)
        console.log(itemData)
        setForm({...form, tableItems: [...form.tableItems, itemData]})
        console.log(form)
    }
    
    return (
        <div>
            <div class="content1">
            <div class="back1">
                <i class="angle left icon"></i>
                <Button variant="link" href="/App">Back to sales Order</Button>
            </div>
            <div class="title1">
                <h1>Create a new sales order</h1>
            </div>
                <div class="nav-row1">
                    
                    
                    <NavLink to={`${url}/1`} activeClassName="nav-row-active">Customer Information</NavLink>
                    <NavLink to={`${url}/2`} activeClassName="nav-row-active">Billing</NavLink>
                    <NavLink to={`${url}/3`} activeClassName="nav-row-active">Shipping</NavLink>
                    <NavLink to={`${url}/4`} activeClassName="nav-row-active">Contents</NavLink>
                    <NavLink to={`${url}/5`} activeClassName="nav-row-active">Summary</NavLink>
                </div>

            <ProgressBar animated now={20} />
            
        </div>

        <Switch>
            {console.log(path)}
            <Route exact path="/order-creation/1">
               <OrderCreation1 fields={form} handleChange={handleChange}/>
            </Route>

            <Route path={`${path}/2`}>
                <OrderCreation2 fields={form} handleChange={handleChange}/>
            </Route>

            <Route path={`${path}/3`}>
                <OrderCreation3 fields={form} handleChange={handleChange}/>
            </Route>
            
            <Route path={`${path}/4`}>
                <OrderCreation4 fields={form} handleChange={handleChange} handleCalc={handleCalc} handleTableEntry={handleTableEntry}/>
            </Route>

            <Route path={`${path}/5`}>
                <OrderCreation5 fields={form} handleChange={handleChange}/>
            </Route>
      </Switch>

    </div>
    );
}

export default OrderCreation;
