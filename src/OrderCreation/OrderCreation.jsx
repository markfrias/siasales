import React from 'react';
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
import orderCreation2 from './orderCreation2';

const OrderCreation = () => {

    let { path, url } = useRouteMatch();
    
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
                    
                    
                    <NavLink to={`${url}/1`}>Customer Information</NavLink>
                    <NavLink to={`${url}/2`}>Billing</NavLink>
                    <a href="/orderCreation3">Shipping</a>
                    <a href="/orderCreation4">Contents</a>
                    <a href="/orderCreation5">Summary</a>
                </div>

            <ProgressBar animated now={20} />
            
        </div>

        <Switch>
            {console.log(path)}
            <Route exact path="/order-creation/1">
               <OrderCreation1/>
            </Route>

            <Route path={`${path}/:2`}>
                <orderCreation2 />
            </Route>
      </Switch>

    </div>
    );
}

export default OrderCreation;
