import React from 'react';
import {carServices} from "../../../services";
import {carActions} from "../../../redux/actions/carActions";
import {useDispatch} from "react-redux";

const Car = ({car,setTrigger,setCarForUpdate}) => {
    const carDispatch = useDispatch();
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
            <button onClick={() => {
                carDispatch(carActions.deleteCarById(id));
                handleDeleteCar(id);
            }}>Delete</button>
            <button onClick={() => {
                setCarForUpdate(id);
            }}>Update</button>
        </div>
    );
};

export {
    Car,
};