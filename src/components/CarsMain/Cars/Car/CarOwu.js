import React from 'react';

import styles from './CarOwu.module.css';
import {useDispatch} from "react-redux";
import {carsActions, carsAxiosMethods} from "../../../../redux";
const CarOwu = ({car}) => {
    const {id,brand,price,year} = car;

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(carsAxiosMethods.deleteCar(id,car))
    }
    return (
        <div className={styles.CommentWrapper}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => dispatch(carsActions.updateCar(car))}>Update</button>
        </div>
    );
};

export {
    CarOwu,
};