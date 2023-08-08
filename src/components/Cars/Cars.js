import React, {useEffect} from 'react';

import {Car} from "./Car";
import {carServices} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/actions/carActions";


const Cars = ({trigger,setTrigger,setCarForUpdate}) => {
    const dispatch = useDispatch();

    const cars = useSelector(store => store.carsReducer.cars);

    useEffect(() => {
        carServices.getAll().then(({data}) => dispatch(carActions.setCars(data)));
    },[trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {
    Cars,
};