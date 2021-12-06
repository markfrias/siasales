import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const SalesOrder = () => {
    
    
    const customer = {
        _id: "0123456789",
        customerRepresentativeId: "Toyota Philippines",
        processingStatus: "Processing",
        createdAt: "10-12-20",
        contact:"harrison@atlas.com",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
    const customer_2 = {
        _id: "895462017",
        customerRepresentativeId: "Hyundai Philippines",
        processingStatus: "Processing",
        createdAt: "06-23-21",
        contact:"harrison@atlas.com",
        details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
  
    



    const customersData = [customer, customer_2,customer]

    const [customers, setCustomers] = useState(customersData);
    useEffect(() => {
        let productCustomers, shippingCustomers;
        let customerArray = [];
        fetch('http://localhost:8000/sales-order/')
            .then(response => response.json())
            .then(data => productCustomers = data)

            fetch('https://api-cloud-shipping.klylylydeee.xyz/analytics/users', {
                headers: {
                    'TPSRole': "salesIntegration",
                    'TPSAuthenticate': "Handler eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnRlZ3JhdGlvbl9wYXJ0bmVyIjoiZDcxOTE3ZjctZWRiZC00MjFjLThlZTAtMjhjODc0OGI5NDNlIiwiaWF0IjoxNjMyNTQ0NDI4fQ.kbOpoIdeW10cXLXAcuqyymWtC3cvI8rUHZxAiHsMSes",
                    'Origin': "http://localhost:3000",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
            }).then(response => response.json())
            .then(data => 
                {
                    shippingCustomers = data.payload.list.clients;

                    shippingCustomers.forEach((cust) => {
                        cust.type = "Shipping"
                        customerArray.push(cust);
                    })

                    productCustomers.forEach((cust) => {
                        cust.type = "Product"
                        customerArray.push(cust);
                    })

                    console.log(customerArray);
                    setCustomers(customerArray)
                }).catch((error) => {console.log(error)})

        

        

    }, [])


    const getIcon = (i) => {
        return <FontAwesomeIcon icon={i} />
    }
    return (
        <div className="container-fluid">
            <p></p>
            <div className="row mt-3">
                <div className="col-md-6">
                    <h2 className="f-openSans">Sales Order</h2>
                    <p>Last updated December 2, 2021 5:30 PM</p>
                    
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
                        <th>Sales Order ID</th>
                        <th>Customer ID</th>
                        <th>Status</th>
                        <th>Date Added</th>
                        <th>Contact</th>
                        <th>Details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cust, index) => (
                        console.log(cust),
                        <tr key={index}>
                            <td>{cust._id}</td>
                            <td>{cust.customerRepresentativeId}</td>
                            <td>{cust.processingStatus}</td>
                            <td>{new Date(cust.createdAt).toLocaleDateString("en-PH")}</td>
                            <td>{cust.contact}</td>
                            <td>{cust.details}</td>


                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SalesOrder
