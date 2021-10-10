import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Card.css';

const Card = (props) => {
    // console.log(props);
    const { name, gender, age, tourFee, email, phone, img } = props.tourist;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="card">
            <div style={{ textAlign: 'center' }}>
                <img src={img} alt="" />
            </div>
            <pre className="details">
                <p><span>Name    : </span>{name}</p>
                <p><span>Gender  : </span>{gender}</p>
                <p><span>Age     : </span>{age}</p>
                <p><span>TourFee : </span>${tourFee}</p>
                <p><span>Email   : </span>{email}</p>
                <p><span>Phone   : </span>{phone}</p>
            </pre>
            <div className="button">
                <button onClick={() => props.handleAddToCard(props.tourist)}>{shoppingCart}Add To Card</button>
            </div>
        </div>
    );
};

export default Card;