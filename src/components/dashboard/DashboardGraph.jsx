
import "./dashboard.css"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardGraph = () => {

  const data = [
    { month: "January", cost: 40000 },
    { month: "Febuary", cost: 70000 },
    { month: "March", cost: 80000 },
    { month: "April", cost: 60000 },
    { month: "May", cost: 40000 },
    { month: "June", cost: 50000 },
    { month: "July", cost: 60000 },
    { month: "August", cost: 30000 },
    { month: "September", cost: 50000 },
    { month: "October", cost: 40000 },
    { month: "November", cost: 60000 },
    { month: "December", cost: 40000 },
  ];

  return (
           
    <div className="dashboardGraph">

      <div className="mt-3">
        <h3 className="fw-bolder">Monthly Sales Comparison</h3>
        <p>Last updated December 2, 2021 5:30pm</p>
      </div>

      <div className="mt-4">

        <div className="p-3 ">
          <ResponsiveContainer width="100%" height={400} >
            <LineChart width="100%" height={300} data={data} 
           
               >
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
              <p>X-Axis - Month</p>
            </div>
            <div className="col-sm-3">
              <p>Y-Axis - Monthly Sales</p>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default DashboardGraph