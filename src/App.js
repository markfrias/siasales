import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideMenu from "./components/SideMenu";
import CustomerManagement from "./components/CustomerManagement";
import Sales from "./components/Sales";
import SalesGraph from "./components/SalesGraph";
import OrderCreation1 from "./OrderCreation/OrderCreation1";
import OrderCreation2 from "./OrderCreation/OrderCreation2";
import OrderCreation3 from "./OrderCreation/OrderCreation3";
import OrderCreation4 from "./OrderCreation/OrderCreation4";
import OrderCreation5 from "./OrderCreation/OrderCreation5";
import OrderProcessing from "./OrderCreation/orderProcessing";
import OrderCompleted from "./OrderCreation/orderCompleted";
import OrderRejected from "./OrderCreation/orderRejected";
import OrderDrafting from "./OrderCreation/OrderDrafting";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login/Login";
import OrderCreation from "./OrderCreation/OrderCreation";
import Registration from "./registration/Registration";

function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  return (
    <div className="App">
      <Router>
        

        <Switch>
          
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

          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                setLoginSuccess={setLoginSuccess}
                loginSuccess={loginSuccess}
              />
            )}
          />
          <Route path="/customers" component={CustomerManagement} />
          <Route path="/SalesGraph" component={SalesGraph} />
          <Route path="/Sales" component={Sales} />
          <Route
            path=""
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

export default App;
