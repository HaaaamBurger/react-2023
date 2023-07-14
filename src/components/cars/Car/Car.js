import React from 'react';

import styles from './car.module.css';

const Car = ({car,setOnSave}) => {

    const handleDelete = (id) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{
            method: 'DELETE',
            headers: {'content-type' : 'application/json'}
        }).then(() => setOnSave(prev => !prev))
    }

    const {id,brand,price,year} = car;
    return (
        <div className={styles.wrapper}>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button>Update</button>
        </div>
    );
};

export {
    Car,
};