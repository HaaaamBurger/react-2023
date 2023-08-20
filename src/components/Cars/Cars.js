import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const Cars = () => {
    const dispatch = useDispatch();
    const cars = useSelector(state => state);
    console.log(cars)

    useEffect(() => {
        dispatch(carActions.all())
    },[dispatch])

    return (
        <div>
            Cars
        </div>
    );
};

export {
    Cars,
};