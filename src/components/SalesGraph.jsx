import React from 'react'
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

    return (
        <div className="py-2 px-4">
            <div className="mt-3">
                <h3 className="fw-bolder">Sales Analysis</h3>
                <p>Last updated December 2, 2021 5:30pm</p>

                <div className="d-flex mt-4">
                    <Link className="btn btn-info btn-sm fw-bolder rounded-pill" to="/sales/graph">Graph</Link>
                    <Link className="btn btn-sm fw-bolder rounded-pill ms-3" to="/sales">Table Data</Link>
                </div>
            </div>

            <div className="mt-4">
                <div className="row">
                    <div className="col-auto">
                        <div class="input-group input-group-sm mb-3 bg-light">
                            <label class="input-group-text bg-light" for="inputGroupSelect01">Customer Type:</label>
                            <select class="form-select bg-light form-control-sm" id="inputGroupSelect01">
                                <option value="">All</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-light">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart width="100%" height={300} data={data}>
                            <Line dataKey="cost" stroke="#109e00" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="month" />
                            <YAxis dataKey="cost" />
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
                            <p>y-axis - cost</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SalesGraph
