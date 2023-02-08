import React from "react";
import { Link } from "react-router-dom";


const DashboardList = () =>  {
return(
    <>
        
            <li>
                <Link to="/">
                    Buy Assets
                </Link>
            </li>    
            <li>
                <Link to="/">
                    Sell Assets
                </Link>
            </li>
            <li>
                <Link to="/">Swap Coin</Link>
            </li>
            <li>
                <Link to="/">Pay Bills</Link>
            </li>
            <li>
                <Link to="/">
                    Crypto Loans
                </Link>
            </li>  
            <li>
                <Link to="/">
                    Savings
                </Link>
            </li>
            <li>
                <Link to="/">Cards</Link>
            </li>
            <li>
                <Link to="/">
                    Payment Links
                </Link>
            </li>
    </>
)
}

export default DashboardList
