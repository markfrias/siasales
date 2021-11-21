import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine, faKey, faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import dashboardIcon from '../img/dashboard.png';
import { Link } from 'react-router-dom'

const SideMenu = ({ page }) => {
    const activeClass = () => {
        return "nav-item py-2 bg-info active rounded mx-1";
    }
    const linkClass = () => {
        return "nav-item py-2 ";
    }


    return (
        <div className="side-menu bg-light pt-5">
            <div className="row">
                <div className="col">
                    <div className="text-center f-comfartaa px-3">
                        <p className="fs-lg-5 fs-xl-3 fs-6 mb-0">wilbur</p>
                        <p className="fs-lg-5 fs-xl-3 fs-6 mt-0">SIS</p>
                    </div>
                </div>
            </div>
            <nav className="text-center">
                <ul className="nav d-flex flex-column h-100" style={{ height: "100%" }}>
                    <li className={page == "dashboard" ? activeClass() : linkClass()}>
                        <a className="nav-link text-dark">
                            <img src={dashboardIcon} alt="" style={{ width: "25px", height: "22px" }} />
                        </a>
                    </li>
                    <li className={page == "customer" ? activeClass() : linkClass()}>
                        <Link className="nav-link text-dark" to="/">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </Link>
                    </li>
                    <li className={page == "sales" ? activeClass() : linkClass()}>
                        <Link className="nav-link text-dark" to="/sales"><FontAwesomeIcon icon={faChartLine} size="lg" /></Link>
                    </li>
                    <li className={page == "key" ? activeClass() : linkClass()}>
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faKey} size="lg" />
                        </a>
                    </li>
                    <li className={page == "customer_management" ? activeClass() : linkClass()}>
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faPlusCircle} size="lg" />
                        </a>
                    </li>

                    <li className="nav-item py-2 account-item">
                        <a className="nav-link text-dark">
                            <FontAwesomeIcon icon={faUserCircle} size="lg" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu
