import React from 'react'
import { Link } from 'react-router-dom'
const Sales = () => {
    return (
        <div className="py-2 px-4">
            <div className="mt-3">
                <h3 className="fw-bolder">Sales Analysis</h3>
                <p>Last updated December 2, 2021 5:30pm</p>

                <div className="d-flex mt-4">
                    <Link className="btn btn-sm fw-bolder rounded-pill me-3" to="/sales/graph">Graph</Link>
                    <Link className="btn btn-info btn-sm fw-bolder rounded-pill" to="/sales/graph">Table Data</Link>
                </div>
            </div>

            <div className="mt-5">
               
            </div>

        </div>
    )
}

export default Sales

