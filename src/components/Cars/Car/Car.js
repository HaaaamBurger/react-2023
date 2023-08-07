import React from 'react';

const Car = ({car}) => {
    const {brand,year,price} = car;
    return (
        <div style={{margin: '20px'}}>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button>Delete</button>
            <button>Update</button>
        </div>
    );
};

export {
    Car,
};