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
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="">
                            <tr>
                                {
                                    [
                                        "Customer ID", "Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021", "May 2021",
                                        "June 2021", "Jul 2021", "Aug 2021", "Sep 2021", "Oct 2021", "Nov 2021", "Dec 2021"
                                    ].map((val, index) => (
                                        <th className="fw-bolder" key={index}>{val}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bold ">0123456789</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                            </tr>
                            <tr>
                                <td className="fw-bold">0123456789</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                            </tr>
                            <tr>
                                <td className="fw-bold">0123456789</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                            </tr>
                            <tr>
                                <td className="fw-bold">0123456789</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                                <td>10,0000</td>
                            </tr>
                           
                        </tbody>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Sales

