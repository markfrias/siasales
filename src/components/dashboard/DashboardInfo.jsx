import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faMoneyBill, } from "@fortawesome/free-solid-svg-icons";


export default function DashboardInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <FontAwesomeIcon icon={faMoneyBill} />

                <span className="featuredTitle"> Total Sales</span>
                <div className="TotalSalesContainer">
                    <span className="TotalSales"> 725,000 PhP</span>

                </div>
            </div>
            <div className="featuredItem">
                <FontAwesomeIcon icon={faCaretUp} />
                <span className="featuredTitle">New Sales For January</span>

                <div className="TotalSalesContainer">
                    <span className="TotalSales"> 25,000 PhP</span>

                </div>
            </div>
            <div className="featuredItem">
                <FontAwesomeIcon icon={faCaretDown} />
                <span className="featuredTitle"> New Sales For This Year</span>

                <div className="TotalSalesContainer">
                    <span className="TotalSales"> 125,000 PhP</span>

                </div>
            </div>
        </div>

    )
}