import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine, faKey,faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import dashboardIcon from '../img/dashboard.png';

const SideMenu = () => {
    return (
        <div className="side-menu bg-light pt-5">
            <div className="text-center f-comfartaa px-3">
                <h4>wilbur</h4>
                <h4>SIS</h4>
            </div>
            <nav className="text-center">
                <ul className="nav d-flex flex-column h-100" style={{height:"100%"}}>
                    <li className="nav-item py-2">
                        <a className="nav-link text-dark">
                            <img src={dashboardIcon} alt="" style={{width:"25px",height:"22px"}}/>
                        </a>                        
                    </li>
                    <li className="nav-item py-2 bg-info active rounded mx-1">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faUser} size="lg"/>
                        </a>                        
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faChartLine} size="lg"/>
                        </a>                        
                    </li>
                    <li className="nav-item py-2 ">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faKey} size="lg"/>
                        </a>                        
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faPlusCircle} size="lg"/>
                        </a>                        
                    </li>

                    <li className="nav-item py-2 account-item">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                        </a>                        
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu
