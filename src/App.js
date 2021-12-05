import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration1 from './registration/registration1'
import Registration2 from './registration/registration2'
import Registration3 from './registration/registration3'
import Registration4 from './registration/registration4'
import SideMenu from './components/SideMenu';
import CustomerManagement from './components/CustomerManagement';
import Sales from './components/Sales';
import SalesGraph from './components/SalesGraph';
import OrderCreation1 from './OrderCreation/OrderCreation1'
import OrderCreation2 from './OrderCreation/OrderCreation2'
import OrderCreation3 from './OrderCreation/OrderCreation3'
import OrderCreation4 from './OrderCreation/OrderCreation4'
import OrderCreation5 from './OrderCreation/OrderCreation5'
import OrderProcessing from './OrderCreation/orderProcessing'
import OrderCompleted from './OrderCreation/orderCompleted'
import OrderRejected from './OrderCreation/orderRejected'
import OrderDrafting from './OrderCreation/OrderDrafting'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login/Login';
import OrderCreation from './OrderCreation/OrderCreation';
import Registration from './registration/Registration';


function App() {
  const [loginSuccess, setLoginSuccess] = useState(false)
  return (
    <div className="App">
          <Router>
      <nav>
          <ul>
            <Link to="/registration">
              <li>1</li>
            </Link>
            <Link to="/registration2">
              <li>2</li>
            </Link>
            <Link to="/registration3">
              <li>3</li>
            </Link>
            <Link to="/registration4">
              <li>4</li>
            </Link>
            <Link to="/SalesGraph">
              <li>SalesGraph</li>
            </Link>
            <Link to="/order-creation/1">
              <li>Sales Order Creation</li>
            </Link>

           
            
            <Link to="/orderProcessing/:id">
              <li>orderProcessing</li>
            </Link>
            <Link to="/orderCompleted">
              <li>orderCompleted</li>
            </Link>
            <Link to="/orderRejected">
              <li>orderRejected</li>
            </Link>
            <Link to="/orderDrafting">
              <li>orderDrafting</li>
            </Link>

            <Link to="/login">
              <li>4</li>
            </Link>
            
          </ul>
      </nav>

        <Switch>
          
          <Route path="/registration1" component={Registration1} />
          <Route path="/registration2" component={Registration2} />
          <Route path="/registration3" component={Registration3} />
          <Route path="/registration4" component={Registration4} />
          <Route path="/registration" component={Registration} />

          <Route path="/orderCreation1" component={OrderCreation1} />
          <Route path="/orderCreation2" component={OrderCreation2} />
          <Route path="/orderCreation3" component={OrderCreation3} />
          <Route path="/orderCreation4" component={OrderCreation4} />
          <Route path="/orderCreation5" component={OrderCreation5} />
          <Route path="/orderProcessing/:id" component={OrderProcessing} />
          <Route path="/orderCompleted" component={OrderCompleted} />
          <Route path="/orderRejected" component={OrderRejected} />
          <Route path="/orderDrafting" component={OrderDrafting} />
          <Route path="/order-creation" component={OrderCreation} />

          <Route path="/login" render={(props) => <Login {...props} setLoginSuccess={setLoginSuccess} loginSuccess={loginSuccess} />} />
          <Route path="/customers" component={CustomerManagement} />
          <Route path="/SalesGraph" component={SalesGraph} />
          <Route path="/Sales" component={Sales} />
        </Switch>
      
    </Router>

    <div className="row gx-3">
      <div className="col-lg-auto w-5 col-sm-0 col-0">
          <SideMenu/>
      </div>
      <div className="col">
        <CustomerManagement/>
      </div>
    </div>
</div>


  );
}


export default App;
