import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import TotalDisplay from '../TotalDisplay/TotalDisplay';
import TotalTourist from '../TotalTourist/TotalTourist';
import './Tourist.css';

const Tourist = () => {
    const [tourists, setTourists] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('./generated.json')
            .then(res => res.json())
            .then(data => setTourists(data))
    }, [])

    const handleAddToCard = (tourist) => {
        const newCart = [...carts, tourist];
        setCart(newCart);
    }

    return (
        <div className="tour-container">
            <div className="card-container">
                {
                    tourists.map(tourist => <Card
                        key={tourist._id}
                        tourist={tourist}
                        handleAddToCard={handleAddToCard}
                    ></Card>)
                }
            </div>
            <div>
                <TotalDisplay carts={carts}></TotalDisplay>
                {
                    carts.map(cart => <TotalTourist
                        key={cart._id}
                        cart={cart}
                    ></TotalTourist>)
                }
            </div>
        </div>
    );
};

export default Tourist;