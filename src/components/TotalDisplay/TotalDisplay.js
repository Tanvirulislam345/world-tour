import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './TotalDisplay.css';

const TotalDisplay = (props) => {
    const userCheck = <FontAwesomeIcon icon={faUserCheck} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />

    const { carts } = props;
    let total = 0;
    for (const cart of carts) {
        total = total + cart.tourFee;
    }
    return (
        <div>
            <div className="details-container">
                <h3>{userCheck}Total Tourist : <span>{carts.length}</span></h3>
                <h3>Total Cost :<span>{dollar}{total.toFixed(2)}</span></h3>
            </div>
        </div>
    );
};

export default TotalDisplay;