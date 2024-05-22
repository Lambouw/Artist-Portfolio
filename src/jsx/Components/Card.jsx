import React from 'react';

import '../../dist/card.css';

const Card = ({ image, name, width, height, depth, date, details }) => {
    return (
        <div className="card">
            <div className="card--image--container">
                <img className="card--image" src={image} alt={name} />
            </div>
            <div className="card--overlay">
                <p className="card--overlay--text" >{name}</p>
                <p className="card--overlay--text" >{date}</p>
                <p className="card--overlay--text" >{width} * {height} * {depth}</p>
                <p className="card--overlay--text" >{details}</p>
            </div>
        </div>
    );
};

export default Card;