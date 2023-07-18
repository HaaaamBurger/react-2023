import React from 'react';

import styles from './car.module.css'
import {axiosServices} from "../Services/Axios.sevices";
const Car = ({car,setPingCars,setUpdateCar}) => {
    const {id,brand,price,year} = car;

    const deleteHandle = () => {
        axiosServices.deleteCar(car.id).then(() => setPingCars(prev => !prev));
    }

    return (
        <div className={styles.carWrapper}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={deleteHandle}>Delete</button>
            <button onClick={() => setUpdateCar(car)}>Update</button>
        </div>
    );
};

export {
    Car,
};
