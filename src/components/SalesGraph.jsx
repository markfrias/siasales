import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const SalesGraph = () => {

    const data = [
        { month: "January", cost: 40 },
        { month: "Febuary", cost: 70 },
        { month: "March", cost: 80 },
        { month: "April", cost: 60 },
        { month: "May", cost: 40 },
        { month: "June", cost: 50 },
        { month: "July", cost: 60 },
        { month: "August", cost: 30 },
        { month: "September", cost: 50 },
        { month: "October", cost: 40 },
        { month: "November", cost: 60 },
        { month: "December", cost: 40 },
    ];

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetch('https://api-cloud-shipping.klylylydeee.xyz/analytics/transactions/avg-cost/monthly?year=2021', {
        headers: {
            'TPSRole': "salesIntegration",
            'TPSAuthenticate': "Handler eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnRlZ3JhdGlvbl9wYXJ0bmVyIjoiZDcxOTE3ZjctZWRiZC00MjFjLThlZTAtMjhjODc0OGI5NDNlIiwiaWF0IjoxNjMyNTQ0NDI4fQ.kbOpoIdeW10cXLXAcuqyymWtC3cvI8rUHZxAiHsMSes",
            'Origin': "http://localhost:3000",
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        }
        )
        .then (response => response.json())
        .then(data => setChartData(data.payload))
        .catch(error => console.log("Error"))
    }, [])
 

    return (
        <div className="py-2 px-4">
            <div className="mt-3">
                <h3 className="fw-bolder">Sales Analysis</h3>
                <p>Last updated December 2, 2021 5:30pm</p>
            </div>

            <div className="mt-4">
                <div className="p-3 bg-light">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart width="100%" height={300} data={chartData}>
                            <Line dataKey="average_cost" stroke="#109e00" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="month" />
                            <YAxis dataKey="average_cost" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 ms-5">
                    <p className="fw-bolder fs-6">Legend: </p>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>x-axis - month</p>
                        </div>
                        <div className="col-sm-3">
                            <p>y-axis - average individual spending</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 ms-5">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="">
                                <tr>
                                    {
                                        [
                                            "Average Spending", "Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021", "May 2021",
                                            "June 2021", "Jul 2021", "Aug 2021", "Sep 2021", "Oct 2021", "Nov 2021", "Dec 2021"
                                        ].map((val, index) => (
                                            <th className="fw-bolder" key={index}>{val}</th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                               
                                <tr>
                                    <td className="fw-bold"></td>
                                    {data.map((val, index) => (
                                        <td key={index}>
                                            {val.cost}
                                        </td>
                                    ))}
                                </tr>
                            
                            </tbody>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SalesGraph
