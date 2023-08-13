import React from 'react';

import styles from './CarForm.module.css';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carsAxiosMethods} from "../../../redux";
const CarsForm = () => {
    const dispatch = useDispatch();

    const {
        reset,
        register,
        handleSubmit
    } = useForm();

    const saveCar = (car) => {
        dispatch(carsAxiosMethods.createCar(car))
    }

    return (
        <form className={styles.CarFormWrapper} onSubmit={handleSubmit(saveCar)}>
            <input type="text" {...register('brand')}/>
            <input type="number" {...register('year')}/>
            <input type="number" {...register('price')}/>
            <button>Add</button>
        </form>
    );
};

export {
    CarsForm,
};