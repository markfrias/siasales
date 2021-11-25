import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine, faKey, faPlusCircle, faUserCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import "./sidemenu.css"
import { Link } from 'react-router-dom'

const SideMenu = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                   
                        <h4 className="sidebarTitle">wilbur SIS</h4>
                        <ul className="sidebarList">
                         <li className="sidebarListItem">
                             <FontAwesomeIcon icon={faTachometerAlt} size="lg"className="sidebarIcon" /> 
                             Dashboard
                         </li>
                         <li className="sidebarListItem">
                         <FontAwesomeIcon icon={faUser} size="lg" className="sidebarIcon"/> 
                            Customer
                         </li>
                         <li className="sidebarListItem">
                         <FontAwesomeIcon icon={faChartLine} size="lg" className="sidebarIcon" />
                            Sales
                         </li>
                         <li className="sidebarListItem">
                         <FontAwesomeIcon icon={faPlusCircle} size="lg" className="sidebarIcon" /> 
                            Sales Order
                         </li>
                         <div className="bottomItem">
                         <li className="sidebarListItem">
                         <FontAwesomeIcon icon={faUserCircle} size="lg" className="sidebarIcon"/>
                            My Account 
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

export default SideMenu
