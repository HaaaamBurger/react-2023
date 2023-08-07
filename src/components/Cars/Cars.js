import React, {useEffect, useState} from 'react';

import {Car} from "./Car";
import {carServices} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/actions/carActions";


const Cars = () => {
    const dispatch = useDispatch();

    const cars = useSelector(store => store.carsReducer.cars);

    useEffect(() => {
        carServices.getAll().then(({data}) => dispatch(carActions.setCars(data)));
    },[])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars,
};