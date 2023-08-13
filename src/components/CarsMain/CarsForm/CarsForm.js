import React, {useEffect} from 'react';

import styles from './CarForm.module.css';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsAxiosMethods} from "../../../redux";
const CarsForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: {isValid},
        setValue
    } = useForm({mode: 'all'});

    const dispatch = useDispatch();
    const updateCar = useSelector(store => store.carsReducer.updateCar);
    console.log(updateCar);

    useEffect(() => {
        if (updateCar) {
            setValue('brand',updateCar.car.brand,{shouldValidate: true});
            setValue('year',updateCar.car.year,{shouldValidate: true});
            setValue('price',updateCar.car.price,{shouldValidate: true});
        }
    },[updateCar])

    const saveCar = (car) => {
        dispatch(carsAxiosMethods.createCar(car))
        reset();
    }

    const carForUpdate = async (updateCar) => {
        console.log(updateCar)
        await (carsAxiosMethods.updateCar(updateCar.id, updateCar));
        reset();
    }

    return (
        <form className={styles.CarFormWrapper} onSubmit={handleSubmit(!updateCar ? saveCar : carForUpdate)}>
            <input type="text" {...register('brand', {required:'true'})}/>
            <input type="number" {...register('year', {required:'true'})}/>
            <input type="number" {...register('price', {required:'true'})}/>
            <button disabled={!isValid}>{!updateCar ? 'Create' : 'Update'}</button>
        </form>
    );
};

export {
    CarsForm,
};