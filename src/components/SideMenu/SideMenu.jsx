import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine, faKey, faPlusCircle, faUserCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import "./SideBar.css"
import { Link, Route } from 'react-router-dom'
import { DropdownButton,Dropdown} from 'react-bootstrap'
import { useHistory } from 'react-router'
import {withRouter} from 'react-router';
import Login from '../../login/Login';


const SideMenu = () => {
    const history = useHistory();

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">

                    <h4 className="sidebarTitle">wilbur SIS</h4>
                    <ul className="sidebarList">
                        <Link className="dash-link"  to="dashboard" onClick={() => {history.push("/dashboard")}}> 
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faTachometerAlt} size="lg" className="sidebarIcon" />
                            Dashboard
                        </li>
                        </Link>
                       
                        <Link className="dash-link" to="/customers" onClick={() => {history.push("/customers")}}>                        
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faUser} size="lg" className="sidebarIcon" />
                            Customer
                        </li>
                        </Link>
                        <Link className="dash-link"  to="/sales" onClick={() => {history.push("/sales")}}>   
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faChartLine} size="lg" className="sidebarIcon" />
                            Sales
                        </li>
                        </Link>
                        <Link className="dash-link"  to="/order-creation/1" >   
                        <li className="sidebarListItem">
                            <FontAwesomeIcon icon={faPlusCircle} size="lg" className="sidebarIcon" />
                            Sales Order
                        </li>
                        </Link>
                        <div className="bottomItem">
                            <li className="sidebarListItem">
                                <FontAwesomeIcon icon={faUserCircle} size="lg" className="sidebarIcon" />
                                
                                <DropdownButton title="My Account">
                                    <Dropdown.Item href="/login">Logout</Dropdown.Item>
                                    
                                </DropdownButton>
                            </li>
                        </div>
                    </ul>

                </div>
            </div>





            {/* <a className="nav-link text-dark"> 
                            
                        </a>Dashboard
                    </li>
                    <li className="nav-item py-2 " >
                        <a className="nav-link text-dark" >
                            <FontAwesomeIcon icon={faUser} size="lg" /> 
                            
                            
                        </a> Customer
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faChartLine} size="lg" />
                        </a> Sales      
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faPlusCircle} size="lg" /> 
                        </a>Sales Order
                    </li>
                    <li className="nav-item py-2 account-item">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        </a> My Account
                    </li>
                </ul >*/}

        </div >
    )
}

export default withRouter(SideMenu);