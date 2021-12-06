import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerManagement from "./components/CustomerManagement";
import SalesGraph from "./components/SalesGraph";

import OrderProcessing from "./OrderCreation/orderProcessing";
import OrderCompleted from "./OrderCreation/orderCompleted";
import OrderRejected from "./OrderCreation/orderRejected";
import OrderDrafting from "./OrderCreation/OrderDrafting";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login/Login";
import OrderCreation from "./OrderCreation/OrderCreation";
import Registration from "./registration/Registration";
import SideBar from "./components/SideMenu/SideMenu";
import { useRouteMatch } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import SalesOrder from "./components/SalesOrder/SalesOrder";

function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [auth, setAuth] = useState({ loggedIn: false, jwt: "" });
  let { path, url } = useRouteMatch();

  if (loginSuccess === false) {
    return (<div className="App">
    <Router>

      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/sales-order" component={SalesOrder} />

        <Route path="/orderProcessing/:id" component={OrderProcessing} />
        <Route path="/orderCompleted" component={OrderCompleted} />
        <Route path="/orderRejected" component={OrderRejected} />
        <Route path="/orderDrafting" component={OrderDrafting} />
        <Route path="/order-creation" component={OrderCreation} />

        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              setAuth={setAuth}
              setLoginSuccess={setLoginSuccess}
              loginSuccess={loginSuccess}
              auth={auth}
            />
          )}
        />
        <Route path="/customers" component={CustomerManagement} />
        <Route path="/SalesGraph" component={SalesGraph} />
        <Route path="/Sales" component={SalesGraph} />
        <Route
          path="/"
          render={(props) => (
            <Login
              {...props}
              setLoginSuccess={setLoginSuccess}
              loginSuccess={loginSuccess} 
            />
          )}
        />
      </Switch>
    </Router>
  </div>)
  }
  else {
    return (
      <div className="App">
        <Router>
          <SideBar />
  
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/sales-order" component={SalesOrder} />
  
            <Route path="/orderProcessing/:id" component={OrderProcessing} />
            <Route path="/orderCompleted" component={OrderCompleted} />
            <Route path="/orderRejected" component={OrderRejected} />
            <Route path="/orderDrafting" component={OrderDrafting} />
            <Route path="/order-creation" component={OrderCreation} />
  
            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  setAuth={setAuth}
                  setLoginSuccess={setLoginSuccess}
                  loginSuccess={loginSuccess}
                  auth={auth}
                />
              )}
            />
            <Route path="/customers" component={CustomerManagement} />
            <Route path="/SalesGraph" component={SalesGraph} />
            <Route path="/Sales" component={SalesGraph} />
            <Route
              path="/"
              render={(props) => (
                <Login
                  {...props}
                  setLoginSuccess={setLoginSuccess}
                  loginSuccess={loginSuccess} 
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }

  
}

export default App;
{/** */}