import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id,brand,price,year} = car;

    const handleUpdate = (car) => {
        dispatch(carActions.setCarForUpdate(car))
    }
    const handleDelete = (id) => {
        dispatch(carActions.deleteCar(id));
    }

    return (
        <div style={{margin: '15px'}}>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => {handleDelete(id)}}>Delete</button>
            <button onClick={() => {handleUpdate(car)}}>Update</button>
        </div>
    );
};

export {
    Car,
};