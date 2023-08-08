import React from 'react';
import {carServices} from "../../../services";

const Car = ({car,setTrigger,setCarForUpdate}) => {
    const {id,brand,year,price} = car;

    const handleDeleteCar = (id) => {
        carServices.deleteById(id).then(() => {
            setTrigger(prevState => !prevState);
        })
    }

    return (
        <div style={{margin: '20px'}}>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={() => handleDeleteCar(id)}>Delete</button>
            <button onClick={() => {
                setCarForUpdate(id);
            }}>Update</button>
        </div>
    );
};

export {
    Car,
};