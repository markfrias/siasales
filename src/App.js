import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration1 from './registration/registration1'
import Registration2 from './registration/registration2'
import Registration3 from './registration/registration3'
import Registration4 from './registration/registration4'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login/login';


function App() {
  return (
    
    <Router>
      

        <Switch>
          <Route path="/registration1" component={Registration1} />
          <Route path="/registration2" component={Registration2} />
          <Route path="/registration3" component={Registration3} />
          <Route path="/registration4" component={Registration4} />
          <Route path="/login" component={Login}/>
        </Switch>
      
    </Router>


  );
}


export default App;
