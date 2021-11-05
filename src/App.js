import './App.css';
import {} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideMenu from './components/SideMenu';
import CustomerManagement from './components/CustomerManagement';
function App() {
  return (
    <div className="App">
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
