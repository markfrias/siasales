import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const CustomerManagement = () => {

    const customer = {
        id: "0123456789",
        name: "Toyota Philippines",
        type: "Shipping Service",
        address: "51 MaryLand Street Apartment City Los Angeles, CA",
        dateAdded: "01/05/2021",
        emailAddress: "harrison@atlas.com",
        totalSales: "50k",
        lastTransaction: "01/07/2021"
    }
    const customer_2 = {
        id: "0123456789",
        name: "Toyota Philippines",
        type: "Product",
        address: "51 MaryLand Street Apartment City Los Angeles, CA",
        dateAdded: "01/05/2021",
        emailAddress: "harrison@atlas.com",
        totalSales: "50k",
        lastTransaction: "01/07/2021"
    }
    const customersData = [customer, customer_2,customer]

    const getIcon = (i) => {
        return <FontAwesomeIcon icon={i} />
    }
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-6">
                    <h2 className="f-openSans">Customer Management</h2>
                    <p>Last updated December 2, 2021 5:30 PM</p>
                    <div className="form-group has-search">
                        <FontAwesomeIcon icon={faSearch} className="form-control-feedback" size="sm" />
                        <input type="text" className="form-control rounded w-75 py-1" placeholder="Search" />
                    </div>
                    <div className="row mt-3 ">
                        <div className="col-md-6">
                            <div className="row gx-1 bg-light p-2">
                                <div className="col-sm-auto align-self-center">
                                    <label htmlFor="Customer Type:">Customer Type:</label>
                                </div>
                                <div className="col-sm">
                                    <select name="" id="" className="form-select bg-light ">
                                        <option value="">All</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* table */}
            <table className="table table-striped mt-2 rounded ">
                <thead className="bg-light">
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Customer Type</th>
                        <th>Address</th>
                        <th>Date Added</th>
                        <th>Email Address</th>
                        <th>Total Sales</th>
                        <th>Last Transaction</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customersData.map((cust, index) => (
                        <tr key={index}>
                            <td>{cust.id}</td>
                            <td>{cust.name}</td>
                            <td>
                                {/* <button className="btn btn-outline-primary rounded-pill btn-sm">
                                    {cust.type}
                                </button> */}
                                {cust.type == "Product" ? (
                                    <p className="border border rounded-pill text-center p-2">
                                        {cust.type}
                                    </p>
                                ) : (

                                    <p className="border-primary border rounded-pill text-center text-primary">
                                        {cust.type}
                                    </p>
                                )}
                            </td>
                            <td>{cust.address}</td>
                            <td>{cust.dateAdded}</td>
                            <td>{cust.emailAddress}</td>
                            <td>{cust.totalSales}</td>
                            <td>{cust.lastTransaction}</td>
                            <td><button className="btn">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerManagement
