import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration1 from './registration/registration1'
import Registration2 from './registration/registration2'
import Registration3 from './registration/registration3'
import Registration4 from './registration/registration4'
import SideMenu from './components/SideMenu';
import CustomerManagement from './components/CustomerManagement';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login/login';


function App() {
  return (
    <div className="App">
          <Router>
      <nav>
          <ul>
            <Link to="/registration1">
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
          <Route path="/login" component={Login}/>
          <Route path="/customers" component={CustomerManagement} />
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
