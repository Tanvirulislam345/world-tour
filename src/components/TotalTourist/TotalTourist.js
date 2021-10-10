import React from 'react';
import './TotalTourist.css';

const TotalTourist = (props) => {
    // console.log(props.cart);
    const { name, img } = props.cart;
    return (
        <div className="touristPerson">
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default TotalTourist;